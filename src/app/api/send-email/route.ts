import { render } from "@react-email/render";
import { Resend } from "resend";
import EmailTemplate from "@/components/email-template";
const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  if (!name || !email || !message) {
    return new Response(JSON.stringify({ error: "All fields are required." }), {
      status: 400,
    });
  }

  try {
    const { data, error } = await resend.emails.send({
      from: "Portfolio <portfolio@resend.dev>",
      to: "yassir.hrichi@gmail.com",
      subject: "New message from your portfolio",
      react: EmailTemplate({ name, email, message }),
    });

    if (error) {
      return Response.json({ error }, { status: 500 });
    }

    return Response.json(data);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
