export async function onRequest(context) {
  // 1. Get the Fortnite bucket
  const bucket = context.env.FORTNITE_BUCKET;

  // 2. Ask R2 for the list of files
  const list = await bucket.list();

  // 3. Send the list back
  return new Response(JSON.stringify(list.objects), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
