import nodemailer from "nodemailer";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS,
        },
    });

    await transporter.sendMail({
        from: `"Website Contact" <${process.env.EMAIL_USER}>`,
        to: process.env.EMAIL_USER,
        subject: "📩 New Contact Form Message",
        html: `
  <div style="background:#f4f6f8;padding:40px 0;font-family:Arial,sans-serif;">
    <div style="max-width:600px;margin:0 auto;background:#ffffff;
      border-radius:12px;overflow:hidden;box-shadow:0 10px 30px rgba(0,0,0,0.08);">

      <div style="background:#111827;padding:20px 24px;">
        <h2 style="color:#ffffff;margin:0;font-size:20px;">
          New Contact Message
        </h2>
      </div>

      <div style="padding:24px;color:#374151;">
        <p style="margin:0 0 16px;font-size:14px;">
          You’ve received a new message from your website contact form.
        </p>

        <table style="width:100%;border-collapse:collapse;font-size:14px;">
          <tr>
            <td style="padding:8px 0;font-weight:bold;width:90px;">Name:</td>
            <td style="padding:8px 0;">${name}</td>
          </tr>
          <tr>
            <td style="padding:8px 0;font-weight:bold;">Email:</td>
            <td style="padding:8px 0;">
              <a href="mailto:${email}" style="color:#2563eb;text-decoration:none;">
                ${email}
              </a>
            </td>
          </tr>
        </table>

        <div style="margin-top:20px;">
          <p style="font-weight:bold;margin-bottom:6px;">Message:</p>
          <div style="background:#f9fafb;border:1px solid #e5e7eb;
            border-radius:8px;padding:12px;line-height:1.6;">
            ${message.replace(/\n/g, "<br />")}
          </div>
        </div>
      </div>

      <div style="background:#f9fafb;padding:16px 24px;
        text-align:center;font-size:12px;color:#6b7280;">
        Sent from your website contact form
      </div>
    </div>
  </div>
  `,
    });


    return NextResponse.json({ success: true });
}
