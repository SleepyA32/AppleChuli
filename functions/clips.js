export async function onRequest(context) {
  const bucket = context.env.MY_BUCKET;
  const list = await bucket.list();
  return new Response(JSON.stringify(list.objects), {
    headers: { "Content-Type": "application/json" }
  });
}
