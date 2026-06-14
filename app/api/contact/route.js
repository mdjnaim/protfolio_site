export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return Response.json({ error: "All fields required" }, { status: 400 });
  }

  console.log("New contact message:", { name, email, subject, message });
  return Response.json({ success: true }, { status: 200 });
}