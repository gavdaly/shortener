addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})

/**
 * Respond with hello worker text
 * @param {Request} request
 */
async function handleRequest(request) {
  const value = await FIRST_KV_NAMESPACE.get("first-key")
  if (value === null) {
    return new Response("Value not found", {status: 404})
  }

  console.log(request)
  return new Response(value, {
    status: 302
  })
}
