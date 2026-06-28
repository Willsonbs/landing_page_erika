import type { VercelRequest, VercelResponse } from "@vercel/node";
import nodemailer from "nodemailer";

function escapeHtml(text: string): string {
  const map: Record<string, string> = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return text.replace(/[&<>"']/g, (c) => map[c]);
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");

  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  const { name, email, phone, message } = req.body ?? {};

  if (!name || !email || !phone || !message) {
    return res.status(400).json({ error: "Todos os campos são obrigatórios." });
  }

  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    console.error("GMAIL_USER ou GMAIL_PASSWORD não configurados.");
    return res.status(500).json({ error: "Configuração de email ausente no servidor." });
  }

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: { user: gmailUser, pass: gmailPassword },
    });

    // Email para a Dra. Erika
    await transporter.sendMail({
      from: `"${name}" <${gmailUser}>`,
      to: gmailUser,
      replyTo: email,
      subject: `Nova mensagem de contato — ${name}`,
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#1b4332;border-bottom:2px solid #2d6a4f;padding-bottom:10px;">
            Nova Mensagem de Contato
          </h2>
          <div style="background:#f0fdf4;padding:15px;border-radius:8px;margin:20px 0;">
            <p><strong>Nome:</strong> ${escapeHtml(name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(email)}">${escapeHtml(email)}</a></p>
            <p><strong>Telefone/WhatsApp:</strong> ${escapeHtml(phone)}</p>
          </div>
          <div style="margin:20px 0;">
            <h3 style="color:#1b4332;">Mensagem:</h3>
            <p style="white-space:pre-wrap;line-height:1.6;">${escapeHtml(message)}</p>
          </div>
          <hr style="border:none;border-top:1px solid #b7e4c7;margin:20px 0;"/>
          <p style="color:#52796f;font-size:12px;text-align:center;">
            Enviado via formulário de contato — Site Dra. Erika Gonçalves
          </p>
        </div>
      `,
    });

    // Email de confirmação para o visitante
    await transporter.sendMail({
      from: `"Dra. Erika Gonçalves" <${gmailUser}>`,
      to: email,
      subject: "Recebemos sua mensagem — Dra. Erika Gonçalves",
      html: `
        <div style="font-family:Arial,sans-serif;max-width:600px;margin:0 auto;">
          <h2 style="color:#1b4332;">Obrigado por entrar em contato!</h2>
          <p>Olá <strong>${escapeHtml(name)}</strong>,</p>
          <p>Recebemos sua mensagem. A Dra. Erika entrará em contato em breve.</p>
          <p>Se preferir resposta mais rápida, acesse o WhatsApp:</p>
          <p>
            <a href="https://wa.me/5581982095424"
               style="color:#2d6a4f;font-weight:bold;text-decoration:none;">
              Clique aqui para abrir o WhatsApp
            </a>
          </p>
          <hr style="border:none;border-top:1px solid #b7e4c7;margin:20px 0;"/>
          <p style="color:#52796f;font-size:12px;">
            Atenciosamente,<br/>
            <strong>Dra. Erika Gonçalves Leitão</strong><br/>
            Psiquiatra — CRM PE 29662
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true, message: "Mensagem enviada com sucesso!" });
  } catch (error) {
    console.error("Erro ao enviar email:", error);
    return res.status(500).json({ error: "Erro ao enviar mensagem. Tente via WhatsApp." });
  }
}
