export async function onRequest(context) {
  // NOTICE: We are using the NEW binding name here
  const bucket = context.env.PHASMO_BUCKET;

  const list = await bucket.list();

  return new Response(JSON.stringify(list.objects), {
    headers: {
      "content-type": "application/json;charset=UTF-8",
    },
  });
}
