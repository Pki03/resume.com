export default {
  async fetch(request, env, ctx) {
    const url = new URL(request.url)

    if (request.method === "POST" && url.pathname === "/api/subscribe") {
      return handleSubscribe(request, env)
    }

    if (request.method === "GET" && url.pathname === "/api/subscribers") {
      return handleSubscribers(env)
    }

    return env.ASSETS.fetch(request)
  }
}

async function handleSubscribe(request, env) {
  try {
    const { email } = await request.json()
    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return new Response(JSON.stringify({ error: "Invalid email" }), {
        status: 400,
        headers: { "content-type": "application/json", "access-control-allow-origin": "*" }
      })
    }

    const existing = await env.EMAILS.get(email)
    if (existing) {
      return new Response(JSON.stringify({ message: "Already subscribed" }), {
        status: 200,
        headers: { "content-type": "application/json", "access-control-allow-origin": "*" }
      })
    }

    await env.EMAILS.put(email, JSON.stringify({
      email, subscribedAt: new Date().toISOString(), source: "getapplykit.com"
    }))

    const list = await env.EMAILS.get("subscriber_list", "json") || []
    list.push(email)
    await env.EMAILS.put("subscriber_list", JSON.stringify(list))

    return new Response(JSON.stringify({ message: "Subscribed successfully" }), {
      status: 200,
      headers: { "content-type": "application/json", "access-control-allow-origin": "*" }
    })
  } catch (e) {
    return new Response(JSON.stringify({ error: "Internal error" }), {
      status: 500,
      headers: { "content-type": "application/json", "access-control-allow-origin": "*" }
    })
  }
}

async function handleSubscribers(env) {
  const list = await env.EMAILS.get("subscriber_list", "json") || []
  const count = list.length
  return new Response(JSON.stringify({ count, emails: list }), {
    status: 200,
    headers: { "content-type": "application/json", "access-control-allow-origin": "*" }
  })
}
