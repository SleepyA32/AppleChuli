export async function onRequest(context) {
  const bucket = context.env.FORTNITE_PRIVATE; // Matches Binding #2
  const list = await bucket.list();
  return new Response(JSON.stringify(list.objects), {
    headers: { "content-type": "application/json;charset=UTF-8" },
  });
}
