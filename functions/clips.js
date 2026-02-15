export async function onRequest(context) {
  // 1. Get the bucket we connected earlier
  const bucket = context.env.MY_BUCKET;

  // 2. Ask R2 for the list of files
  const list = await bucket.list();

  // 3. Send the list back to the browser as JSON
  return new Response(JSON.stringify(list.objects), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
