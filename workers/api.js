addEventListener("fetch", event => {
  const { pathname } = new URL(event.request.url)
  if (event.request.method === "POST" && pathname === "/api/subscribe") {
    event.respondWith(handleSubscribe(event.request))
  } else if (pathname === "/api/subscribers") {
    event.respondWith(handleSubscribers(event.request))
  } else {
    event.respondWith(new Response("Not Found", { status: 404 }))
  }
})

async function handleSubscribe(request) {
  try {
    const { email } = await request.json()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), { status: 400, headers: { "content-type": "application/json", "access-control-allow-origin": "*" } })
    }

    const existing = await EMAILS.get(email)
    if (existing) {
      return new Response(JSON.stringify({ message: "Already subscribed" }), { status: 200, headers: { "content-type": "application/json", "access-control-allow-origin": "*" } })
    }

    await EMAILS.put(email, JSON.stringify({
      email,
      subscribedAt: new Date().toISOString(),
      source: "getapplykit.com"
    }))

    const list = await EMAILS.get("subscriber_list", "json") || []
    list.push(email)
    await EMAILS.put("subscriber_list", JSON.stringify(list))

    return new Response(JSON.stringify({ message: "Subscribed successfully" }), { status: 200, headers: { "content-type": "application/json", "access-control-allow-origin": "*" } })
  } catch (e) {
    return new Response(JSON.stringify({ error: "Internal error" }), { status: 500, headers: { "content-type": "application/json", "access-control-allow-origin": "*" } })
  }
}

async function handleSubscribers(request) {
  const list = await EMAILS.get("subscriber_list", "json") || []
  const count = list.length
  return new Response(JSON.stringify({ count, emails: list }), { status: 200, headers: { "content-type": "application/json", "access-control-allow-origin": "*" } })
}
