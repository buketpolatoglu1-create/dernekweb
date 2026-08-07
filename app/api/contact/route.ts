import { NextResponse } from "next/server";
import { Resend } from "resend";
import { contactFormSchema } from "@/lib/validations";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    
    // Server-side Zod validation
    const result = contactFormSchema.safeParse(body);
    if (!result.success) {
      return NextResponse.json(
        { error: "Geçersiz form verileri", details: result.error.format() },
        { status: 400 }
      );
    }

    const { fullName, email, subject, message } = result.data;
    const apiKey = process.env.RESEND_API_KEY;

    if (!apiKey) {
      // Offline/Dev mode testing fallback
      console.log("--- MOCK EMAIL SENDING ---");
      console.log(`From: ${fullName} <${email}>`);
      console.log(`Subject: ${subject}`);
      console.log(`Message:\n${message}`);
      console.log("--------------------------");
      
      return NextResponse.json({
        success: true,
        message: "Mesaj başarıyla alındı (Dev Modu).",
      });
    }

    const resend = new Resend(apiKey);
    
    // Send email using Resend
    const { data, error } = await resend.emails.send({
      from: "18-28 Gençlik Derneği <onboarding@resend.dev>",
      to: "iletisim@18-28genclikdernegi.org",
      subject: `İletişim Formu: ${subject}`,
      html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; rounded: 8px;">
          <h2 style="color: #1e1b4b; border-bottom: 2px solid #ea580c; padding-bottom: 10px;">Yeni İletişim Formu Mesajı</h2>
          <p><strong>Gönderen:</strong> ${fullName} (&lt;${email}&gt;)</p>
          <p><strong>Konu:</strong> ${subject}</p>
          <div style="margin-top: 20px; padding: 15px; background-color: #f9f9f9; border-left: 4px solid #ea580c;">
            <p style="white-space: pre-wrap; margin: 0;">${message.replace(/\n/g, "<br />")}</p>
          </div>
          <hr style="border: 0; border-top: 1px solid #e0e0e0; margin-top: 30px;" />
          <p style="font-size: 11px; color: #888888;">Bu e-posta 18-28 Gençlik Derneği web sitesi iletişim formu aracılığıyla otomatik olarak gönderilmiştir.</p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend API error:", error);
      return NextResponse.json(
        { error: "E-posta gönderilirken bir hata oluştu" },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (error) {
    console.error("Unexpected error in contact route:", error);
    return NextResponse.json(
      { error: "Sunucu hatası oluştu" },
      { status: 500 }
    );
  }
}
