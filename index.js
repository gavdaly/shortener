addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Redirect to url
 * @param {Request} request
 */
async function handleRequest(request) {
  const key = new URL(request.url).pathname.slice(1)

  if (key.length === 0) {
    return new Response("Site Not Found", {status: 404})
  }

  const redirect = new URL(await shortener.get(key))

  if (redirect === null) {
    return new Response("Value not found", {status: 404})
  }

  return Response.redirect(redirect, 302)
}
