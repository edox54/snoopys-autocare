"use server";

import { Resend } from "resend";
import { redirect } from "next/navigation";

// Initialize Resend with API Key from environment variables
// This prevents exposing the key in the browser/client-side code
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string;
  const phone = formData.get("phone") as string;
  const vehicle = formData.get("vehicle") as string;
  const serviceType = formData.get("service_type") as string;
  const message = formData.get("message") as string;

  // The email address provided by the user
  const targetEmail = "eduardo@bluestarbrothers.com";

  try {
    // 1. Send the email using Resend
    // By default, you can send to yourself using onboarding@resend.dev
    // If you verify your domain in Resend, you can change the "from" address
    await resend.emails.send({
      from: "Snoopy's Auto Care <onboarding@resend.dev>",
      to: targetEmail,
      subject: `Nuevo Lead: ${name} - ${serviceType}`,
      html: `
        <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; line-height: 1.6; color: #1e293b; max-width: 600px; margin: 0 auto; border: 1px solid #e2e8f0; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
          <div style="background-color: #0f172a; padding: 24px; text-align: center;">
            <h1 style="color: #ffffff; margin: 0; font-size: 24px; letter-spacing: -0.025em;">Snoopy's Auto Care</h1>
            <p style="color: #94a3b8; margin: 8px 0 0 0; font-size: 14px; text-transform: uppercase; tracking: 0.1em;">Nuevo Registro de Servicio</p>
          </div>
          <div style="padding: 32px; background-color: #ffffff;">
            <p style="margin-top: 0; font-size: 16px;">Has recibido un nuevo mensaje desde el sitio web:</p>
            
            <table style="width: 100%; border-collapse: collapse; margin: 24px 0;">
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px; width: 120px;">Cliente</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 600; font-size: 15px;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Teléfono</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 600; font-size: 15px;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Vehículo</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 600; font-size: 15px;">${vehicle}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #64748b; font-size: 14px;">Servicio</td>
                <td style="padding: 12px 0; border-bottom: 1px solid #f1f5f9; color: #1e293b; font-weight: 600; font-size: 15px;">${serviceType}</td>
              </tr>
            </table>

            <div style="background-color: #f8fafc; border-radius: 8px; padding: 20px; border-left: 4px solid #f97316;">
              <p style="margin: 0 0 8px 0; font-size: 12px; font-weight: bold; color: #f97316; text-transform: uppercase;">Mensaje del cliente:</p>
              <p style="margin: 0; font-style: italic; color: #334155; font-size: 15px;">"${message}"</p>
            </div>
          </div>
          <div style="background-color: #f1f5f9; padding: 16px; text-align: center; border-top: 1px solid #e2e8f0;">
            <p style="margin: 0; font-size: 12px; color: #94a3b8;">&copy; ${new Date().getFullYear()} Snoopy's Auto Care. Todos los derechos reservados.</p>
          </div>
        </div>
      `,
    });
  } catch (error) {
    console.error("Email send error:", error);
    // Silent fail on server but we can log it
    // In production, you might want to redirect to a generic error page
  }

  // 3. Redirect to thank-you page after either success or handled error
  // This ensures the user doesn't see a raw error page
  redirect("/thank-you");
}
