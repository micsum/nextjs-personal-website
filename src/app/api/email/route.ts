import { EmailTemplate } from "@/app/components/EmailTemplate";
import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.HOST_EMAIL || "";

export async function POST(req: NextRequest) {
  const formData = await req.json();
  const { name, email, subject, message, copy } = formData;

  if (!message || !email || !name || !subject) {
    return NextResponse.json(
      { error: "Missing required fields" },
      { status: 400 }
    );
  }

  try {
    const { data, error } = await resend.emails.send({
      from: `Michael - Personal Website <${fromEmail}>`,
      to: fromEmail,
      cc: copy ? email : "",
      subject: "Message from Personal Website",
      react: await EmailTemplate({ name, email, message, subject }),
    });

    if (error) {
      return NextResponse.json({ error }, { status: 500 });
    }

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
