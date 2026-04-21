import { NextRequest } from "next/server";
import { Resend } from "resend";
import { saveSubmission } from "@/lib/submissions";

const resend = new Resend(process.env.RESEND_API_KEY);
const OWNER_EMAIL = process.env.OWNER_EMAIL ?? "carsoncoleau@gmail.com";
const FROM_EMAIL = process.env.FROM_EMAIL ?? "hello@ironwebstudios.com";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { name, business, phone, email, package: pkg, message } = body;

  if (!name || !business || !email) {
    return Response.json({ error: "Missing required fields" }, { status: 400 });
  }

  await saveSubmission({ name, business, phone, email, package: pkg, message });

  // Send notification to owner
  await resend.emails.send({
    from: FROM_EMAIL,
    to: OWNER_EMAIL,
    replyTo: email,
    subject: `New Lead: ${business} (${pkg || "package not selected"})`,
    html: `
      <h2>New Contact Form Submission</h2>
      <table style="border-collapse:collapse;width:100%;font-family:sans-serif">
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Name</td><td style="padding:8px">${name}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Business</td><td style="padding:8px">${business}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Email</td><td style="padding:8px"><a href="mailto:${email}">${email}</a></td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Phone</td><td style="padding:8px">${phone || "Not provided"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Package</td><td style="padding:8px">${pkg || "Not selected"}</td></tr>
        <tr><td style="padding:8px;font-weight:bold;background:#f5f5f5">Message</td><td style="padding:8px">${message || "No message"}</td></tr>
      </table>
      <p style="margin-top:16px"><a href="${process.env.NEXT_PUBLIC_SITE_URL ?? "https://ironwebstudios.com"}/admin">View Admin Dashboard</a></p>
    `,
  });

  // Send auto-reply to the person who submitted
  await resend.emails.send({
    from: FROM_EMAIL,
    to: email,
    replyTo: OWNER_EMAIL,
    subject: "We received your message — Iron Web Studios",
    html: `
      <div style="font-family:sans-serif;max-width:560px;margin:0 auto">
        <h2 style="color:#f97316">Thanks for reaching out, ${name}!</h2>
        <p>We received your message and will get back to you within <strong>24 hours</strong>.</p>
        <p>In the meantime, feel free to call or text us directly at <strong>(706) 802-2534</strong>.</p>
        <hr style="border:none;border-top:1px solid #eee;margin:24px 0"/>
        <p style="color:#888;font-size:13px">Here's a copy of what you submitted:</p>
        <ul style="color:#555;font-size:14px">
          <li><strong>Business:</strong> ${business}</li>
          <li><strong>Package interested in:</strong> ${pkg || "Not selected"}</li>
          ${message ? `<li><strong>Your message:</strong> ${message}</li>` : ""}
        </ul>
        <p style="margin-top:32px;color:#888;font-size:12px">Iron Web Studios · ironwebstudios.com</p>
      </div>
    `,
  });

  return Response.json({ success: true });
}
