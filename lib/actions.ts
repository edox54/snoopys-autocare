"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";

// Initialize Resend with API Key from environment variables
// This prevents exposing the key in the browser/client-side code
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;
  const phone = formData.get("phone") as string;
  const vehicle = formData.get("vehicle") as string;
  const serviceType = formData.get("service_type") as string;
  const message = formData.get("message") as string;

  // The destination email is now read from environment variables for flexibility
  const targetEmail = process.env.CONTACT_EMAIL || "eduardo@bluestarbrothers.com";

  console.log("Attempting to send lead to:", targetEmail);

  try {
    // 1. Send the email using Resend
    // Use a very simple 'from' address to avoid parsing issues in some environments
    const { data, error } = await resend.emails.send({
      from: "onboarding@resend.dev",
      to: targetEmail,
      replyTo: email,
      subject: `Lead: ${name} - ${serviceType}`,
      html: `
        <div style="font-family: sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden;">
          <div style="background-color: #0f172a; padding: 24px; text-align: center; color: white;">
            <h1 style="margin: 0; font-size: 20px;">Snoopy's Auto Care</h1>
          </div>
          <div style="padding: 32px; background-color: #ffffff;">
            <p>Has recibido un nuevo pedido de servicio:</p>
            <hr style="border: 0; border-top: 1px solid #f1f5f9; margin: 20px 0;" />
            <p><strong>Cliente:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Teléfono:</strong> ${phone}</p>
            <p><strong>Vehículo:</strong> ${vehicle}</p>
            <p><strong>Servicio:</strong> ${serviceType}</p>
            <div style="background-color: #f8fafc; border-radius: 8px; padding: 15px; margin-top: 20px; border-left: 4px solid #f97316;">
              <p style="margin: 0; font-style: italic;">"${message}"</p>
            </div>
          </div>
        </div>
      `,
    });

    if (error) {
      console.error("Resend delivery error detail:", error);
    } else {
      console.log("Email sent successfully:", data?.id);
    }
  } catch (error) {
    console.error("Critical error in sendContactEmail:", error);
  }

  // Always redirect to thank you page if we got here
  // regardless of email success (to prevent the user from being stuck)
  redirect("/thank-you");
}
