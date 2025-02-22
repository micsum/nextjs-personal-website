import nodemailer from "nodemailer";
import EmailTemplate from "@/email/EmailTemplate";
import { NextRequest, NextResponse } from "next/server";
import { render } from "@react-email/components";
import { ReactElement } from "react";
import Mail from "nodemailer/lib/mailer";
import { Ratelimit } from "@upstash/ratelimit";
import { kv } from "@vercel/kv";
import * as cache from "memory-cache";

export async function POST(req: NextRequest) {
  const { name, email, subject, message, copy } = await req.json();

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: 587,
    secure: false,
    auth: {
      user: process.env.HOST_EMAIL,
      pass: process.env.HOST_EMAIL_PASS,
    },
  });

  const emailHtml = await render(
    EmailTemplate({ email, name, subject, message }) as ReactElement
  );

  const mailOptions: Mail.Options = {
    from: process.env.HOST_EMAIL,
    to: process.env.HOST_EMAIL,
    subject: subject,
    html: emailHtml,
  };

  if (copy) {
    mailOptions.cc = email;
  }

  try {
    const isVerified = await transporter.verify();
    if (!isVerified) {
      console.error("Mail server verification failed.");
      return NextResponse.json(
        { error: "Mail server verification failed." },
        { status: 500 }
      );
    }
  } catch (error) {
    console.error(
      "Something Went Wrong",
      process.env.HOST_EMAIL,
      process.env.HOST_EMAIL_PASS,
      error
    );
    return NextResponse.json(
      { error: "Mail server verification failed." },
      { status: 500 }
    );
  }

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent", info.messageId);
    return NextResponse.json({ message: "Email sent", info });
  } catch (err) {
    return NextResponse.json(
      { error: (err as Error).message },
      { status: 500 }
    );
  }
}
