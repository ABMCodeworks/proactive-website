import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

function jsonResponse(statusCode, body) {
  return {
    statusCode,
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  };
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

export async function handler(event) {
  if (event.httpMethod !== "POST") {
    return jsonResponse(405, {
      success: false,
      message: "Method not allowed.",
    });
  }

  try {
    const body = JSON.parse(event.body || "{}");

    const name = String(body.name || "").trim();
    const email = String(body.email || "").trim();
    const subject = String(body.subject || "").trim();
    const message = String(body.message || "").trim();

    if (!name || !email || !message) {
      return jsonResponse(400, {
        success: false,
        message: "Please complete your name, email address, and message.",
      });
    }

    if (!isValidEmail(email)) {
      return jsonResponse(400, {
        success: false,
        message: "Please enter a valid email address.",
      });
    }

    if (!process.env.RESEND_API_KEY) {
      return jsonResponse(500, {
        success: false,
        message: "Resend API key is missing.",
      });
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safeSubject = escapeHtml(subject || "Website enquiry");
    const safeMessage = escapeHtml(message).replaceAll("\n", "<br />");

    const emailSubject = subject
      ? `PROACTIVE Website Enquiry: ${subject}`
      : "PROACTIVE Website Enquiry";

    const { error } = await resend.emails.send({
      from:
        process.env.RESEND_FROM_EMAIL ||
        "PROACTIVE Website <onboarding@resend.dev>",
      to: [process.env.CONTACT_TO_EMAIL || "admin@proactivewildlife.org"],
      reply_to: email,
      subject: emailSubject,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #292524;">
          <h2 style="margin: 0 0 16px;">New website enquiry</h2>

          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>

          <hr style="border: 0; border-top: 1px solid #e7e5e4; margin: 24px 0;" />

          <p><strong>Message:</strong></p>
          <p>${safeMessage}</p>
        </div>
      `,
      text: `
New website enquiry

Name: ${name}
Email: ${email}
Subject: ${subject || "Website enquiry"}

Message:
${message}
      `.trim(),
    });

    if (error) {
      return jsonResponse(500, {
        success: false,
        message: "Your message could not be sent. Please try again.",
      });
    }

    return jsonResponse(200, {
      success: true,
      message: "Thank you. Your message has been sent.",
    });
  } catch (error) {
    return jsonResponse(500, {
      success: false,
      message: "Something went wrong. Please try again.",
    });
  }
}
