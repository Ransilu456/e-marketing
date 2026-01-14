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
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Contact Message</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap" rel="stylesheet">
  <style>
    body, table, td, h1, h2, p, a {
      font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif !important;
    }
  </style>
</head>
<body style="margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Poppins', 'Helvetica Neue', Helvetica, Arial, sans-serif; -webkit-font-smoothing: antialiased;">
  
  <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f3f4f6; padding: 40px 0;">
    <tr>
      <td align="center">
        
        <!-- Main Container -->
        <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 16px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);">
          
          <!-- Header -->
          <tr>
            <td style="background-color: #2666dcff; padding: 32px 40px; text-align: center;">
              <h1 style="color: #ffffff; margin: 0; font-size: 24px; font-weight: 700; letter-spacing: -0.5px;">E Marketing Paradice</h1>
              <p style="color: #fecaca; margin: 8px 0 0; font-size: 14px; font-weight: 500;">New Website Inquiry</p>
            </td>
          </tr>

          <!-- Content Body -->
          <tr>
            <td style="padding: 40px;">
              
              <h2 style="color: #111827; margin: 0 0 24px; font-size: 20px; font-weight: 600;">Someone wants to get in touch!</h2>
              
              <p style="color: #4b5563; margin: 0 0 32px; font-size: 16px; line-height: 24px;">
                You have received a new message from the contact form on your website. Here are the details:
              </p>

              <!-- Details Box -->
              <div style="background-color: #f9fafb; border: 1px solid #e5e7eb; border-radius: 12px; padding: 24px; margin-bottom: 32px;">
                <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                  <tr>
                    <td style="padding-bottom: 16px; border-bottom: 1px solid #e5e7eb;">
                      <p style="margin: 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #9ca3af;">Name</p>
                      <p style="margin: 4px 0 0; font-size: 16px; font-weight: 500; color: #111827;">${name}</p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding: 16px 0; border-bottom: 1px solid #e5e7eb;">
                      <p style="margin: 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #9ca3af;">Email</p>
                      <p style="margin: 4px 0 0; font-size: 16px; font-weight: 500; color: #111827;">
                        <a href="mailto:${email}" style="color: #2666dcff; text-decoration: none;">${email}</a>
                      </p>
                    </td>
                  </tr>
                  <tr>
                    <td style="padding-top: 16px;">
                      <p style="margin: 0; font-size: 12px; font-weight: 600; text-transform: uppercase; letter-spacing: 0.5px; color: #9ca3af;">Message</p>
                      <p style="margin: 8px 0 0; font-size: 16px; line-height: 24px; color: #374151; white-space: pre-wrap;">${message}</p>
                    </td>
                  </tr>
                </table>
              </div>

              <!-- CTA Button -->
              <table role="presentation" border="0" cellpadding="0" cellspacing="0" width="100%">
                <tr>
                  <td align="center">
                    <a href="mailto:${email}" style="display: inline-block; background-color: #dc2626; color: #ffffff; padding: 8px 16px; font-size: 14px; font-weight: 600; text-decoration: none; border-radius: 8px; box-shadow: 0 4px 6px -1px rgba(220, 38, 38, 0.3);">
                      Reply to User
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color: #f9fafb; padding: 32px 40px; text-align: center; border-top: 1px solid #e5e7eb;">
              <p style="color: #6b7280; font-size: 13px; margin: 0; line-height: 1.5;">
                This email was sent from the contact form on <a href="https://emarketingparadice.lk" style="color: #6b7280; text-decoration: underline;">E Marketing Paradice</a>.
              </p>
              <p style="color: #9ca3af; font-size: 12px; margin: 12px 0 0;">
                &copy; ${new Date().getFullYear()} E Marketing Paradice. All rights reserved.
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>

</body>
</html>
        `,
  });


  return NextResponse.json({ success: true });
}
