(function() {
  var scriptTag = document.currentScript
  var containerId = 'getapplykit-ats-widget'
  var existing = document.getElementById(containerId)
  if (existing) return

  var container = document.createElement('div')
  container.id = containerId
  container.style.cssText = 'all:initial;display:inline-block;font-family:Inter,-apple-system,BlinkMacSystemFont,sans-serif'

  var btn = document.createElement('a')
  btn.href = 'https://getapplykit.com/ats-score?ref=embed'
  btn.target = '_blank'
  btn.rel = 'noopener'
  btn.style.cssText = 'display:inline-flex;align-items:center;gap:0.5rem;padding:0.625rem 1rem;background:linear-gradient(135deg,#2563eb,#7c3aed);color:#fff;border-radius:999px;text-decoration:none;font-size:0.875rem;font-weight:600;box-shadow:0 4px 12px rgba(37,99,235,0.3);transition:all 0.2s;cursor:pointer'

  btn.onmouseenter = function() { btn.style.transform = 'translateY(-1px)'; btn.style.boxShadow = '0 6px 20px rgba(37,99,235,0.4)' }
  btn.onmouseleave = function() { btn.style.transform = ''; btn.style.boxShadow = '0 4px 12px rgba(37,99,235,0.3)' }

  var icon = document.createElementNS('http://www.w3.org/2000/svg', 'svg')
  icon.setAttribute('width', '16')
  icon.setAttribute('height', '16')
  icon.setAttribute('viewBox', '0 0 24 24')
  icon.setAttribute('fill', 'none')
  icon.setAttribute('stroke', 'currentColor')
  icon.setAttribute('stroke-width', '2.5')
  icon.setAttribute('stroke-linecap', 'round')
  icon.setAttribute('stroke-linejoin', 'round')
  icon.innerHTML = '<polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h11"/>'

  btn.appendChild(icon)
  btn.appendChild(document.createTextNode('Check ATS Score'))

  var text = document.createElement('span')
  text.style.cssText = 'display:block;font-size:0.6875rem;color:var(--ats-text,#6b7280);margin-top:0.375rem;text-align:center'
  text.textContent = 'Free ATS compatibility check'

  container.appendChild(btn)
  container.appendChild(text)

  if (scriptTag && scriptTag.parentNode) {
    scriptTag.parentNode.insertBefore(container, scriptTag.nextSibling)
  } else {
    document.body.appendChild(container)
  }
})()
