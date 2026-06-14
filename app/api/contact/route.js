import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request) {
  const body = await request.json();
  const { name, email, subject, message } = body;

  if (!name || !email || !subject || !message) {
    return Response.json({ error: "All fields required" }, { status: 400 });
  }

  try {
    await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: "jannatun1481naim@gmail.com",
      subject: `Portfolio Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; background: #f9f9f9;">
          <div style="background: linear-gradient(90deg, #a78bfa, #60a5fa); padding: 2px; border-radius: 10px;">
            <div style="background: #ffffff; border-radius: 8px; padding: 30px;">
              
              <h2 style="color: #1a1a1a; margin: 0 0 20px;">
                New Message from Portfolio 🚀
              </h2>

              <div style="background: #f3f4f6; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                <p style="margin: 0 0 8px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">From</p>
                <p style="margin: 0; color: #1a1a1a; font-size: 16px; font-weight: 600;">${name}</p>
                <p style="margin: 4px 0 0; color: #a78bfa; font-size: 14px;">${email}</p>
              </div>

              <div style="background: #f3f4f6; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
                <p style="margin: 0 0 8px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Subject</p>
                <p style="margin: 0; color: #1a1a1a; font-size: 15px; font-weight: 500;">${subject}</p>
              </div>

              <div style="background: #f3f4f6; border-radius: 8px; padding: 16px; margin-bottom: 24px;">
                <p style="margin: 0 0 8px; color: #6b7280; font-size: 12px; text-transform: uppercase; letter-spacing: 1px;">Message</p>
                <p style="margin: 0; color: #1a1a1a; font-size: 15px; line-height: 1.6;">${message}</p>
              </div>

              <a href="mailto:${email}" style="background: linear-gradient(90deg, #a78bfa, #60a5fa); color: #ffffff; padding: 12px 24px; border-radius: 8px; text-decoration: none; font-weight: 600; font-size: 14px;">
                Reply to ${name} ↗
              </a>

            </div>
          </div>
          <p style="color: #9ca3af; font-size: 12px; text-align: center; margin-top: 16px;">
            Sent from your portfolio contact form
          </p>
        </div>
      `,
    });

    return Response.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error("Email error:", error);
    return Response.json({ error: "Failed to send email" }, { status: 500 });
  }
}