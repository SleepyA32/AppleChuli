export async function onRequest(context) {
  const bucket = context.env.ALEC_BUCKET;
  
  // This lists everything in the bucket, regardless of folders
  const list = await bucket.list({ limit: 1000 });
  
  return new Response(JSON.stringify(list.objects), {
    headers: { "content-type": "application/json;charset=UTF-8" },
  });
}
