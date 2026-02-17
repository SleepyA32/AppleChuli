export async function onRequest(context) {
  const bucket = context.env.OSU_BUCKET; // Must match the binding name above!
  const list = await bucket.list();
  
  return new Response(JSON.stringify(list.objects), {
    headers: { "content-type": "application/json;charset=UTF-8" },
  });
}
