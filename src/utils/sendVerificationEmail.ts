// utils/sendVerificationEmail.ts

import nodemailer from "nodemailer";

interface SendVerificationEmailParams {
  to: string;
  code: string;
  locale?: "fa" | "en";
}

export const generateVerificationCode = (digits = 6): string => {
  return Math.floor(
    Math.pow(10, digits - 1) + Math.random() * 9 * Math.pow(10, digits - 1)
  ).toString();
};

export async function sendVerificationEmail({
  to,
  code,
  locale = "en",
}: SendVerificationEmailParams) {
  const texts = {
    fa: {
      subject: "تأیید ایمیل شما",
      greeting: "سلام!",
      message:
        "برای تأیید حساب کاربری خود لطفاً کد زیر را وارد کنید. این کد فقط تا ۱۰ دقیقه معتبر است.",
      footer: "اگر شما این درخواست را ارسال نکردید، این پیام را نادیده بگیرید.",
      codeLabel: "کد تأیید",
    },
    en: {
      subject: "Verify Your Email",
      greeting: "Hello!",
      message:
        "To verify your account, please enter the code below. This code is valid for 10 minutes only.",
      footer: "If you did not request this, please ignore this message.",
      codeLabel: "Verification Code",
    },
  };

  const t = locale === "fa" ? texts.fa : texts.en;

  const html = `
  <div style="font-family: Arial, sans-serif; background-color: #f4f4f7; padding: 20px;">
    <div style="max-width: 500px; margin: auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; border: 1px solid #e0e0e0;">
      <div style="background-color: #0066cc; color: white; padding: 16px; font-size: 18px; font-weight: bold; text-align: center;">
        ${t.subject}
      </div>
      <div style="padding: 20px; color: #333;">
        <p style="font-size: 16px; margin-bottom: 8px;">${t.greeting}</p>
        <p style="font-size: 14px; line-height: 1.6;">${t.message}</p>
        <div style="margin: 24px 0; text-align: center;">
          <div style="font-size: 14px; color: #888; margin-bottom: 8px;">${t.codeLabel}</div>
          <div style="font-size: 26px; font-weight: bold; background: #f3f3f3; padding: 14px 24px; display: inline-block; border-radius: 6px; letter-spacing: 4px;">
            ${code}
          </div>
        </div>
        <p style="font-size: 12px; color: #999; line-height: 1.4;">${t.footer}</p>
      </div>
    </div>
  </div>`;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  await transporter.sendMail({
    from: `"MyApp" <${process.env.SMTP_USER}>`,
    to,
    subject: t.subject,
    html,
  });
}
