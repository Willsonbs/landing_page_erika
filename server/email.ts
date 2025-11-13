import nodemailer from 'nodemailer';

/**
 * Configurar transportador de email com Gmail
 * Requer variáveis de ambiente:
 * - GMAIL_USER: email do Gmail (ex: willsonbs@gmail.com)
 * - GMAIL_PASSWORD: senha de app do Gmail (gerada em myaccount.google.com/apppasswords)
 */
export async function getEmailTransporter() {
  const gmailUser = process.env.GMAIL_USER;
  const gmailPassword = process.env.GMAIL_PASSWORD;

  if (!gmailUser || !gmailPassword) {
    throw new Error(
      'Variáveis de ambiente GMAIL_USER e GMAIL_PASSWORD não configuradas'
    );
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: gmailUser,
      pass: gmailPassword,
    },
  });
}

/**
 * Interface para dados do formulário de contato
 */
export interface ContactFormData {
  name: string;
  email: string;
  phone: string;
  message: string;
}

/**
 * Enviar email de contato
 * @param data Dados do formulário
 * @returns Promise<boolean> - true se enviado com sucesso
 */
export async function sendContactEmail(data: ContactFormData): Promise<boolean> {
  try {
    const transporter = await getEmailTransporter();
    const recipientEmail = process.env.GMAIL_USER;

    if (!recipientEmail) {
      throw new Error('Email do destinatário não configurado');
    }

    // Enviar email para o proprietário
    await transporter.sendMail({
      from: `"${data.name}" <${process.env.GMAIL_USER}>`,
      to: recipientEmail,
      replyTo: data.email,
      subject: `Nova mensagem de contato - ${data.name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0b0c2b; border-bottom: 2px solid #9f895d; padding-bottom: 10px;">
            Nova Mensagem de Contato
          </h2>
          
          <div style="margin: 20px 0; background-color: #f5f3f0; padding: 15px; border-radius: 8px;">
            <p><strong>Nome:</strong> ${escapeHtml(data.name)}</p>
            <p><strong>Email:</strong> <a href="mailto:${escapeHtml(data.email)}">${escapeHtml(data.email)}</a></p>
            <p><strong>Telefone/WhatsApp:</strong> ${escapeHtml(data.phone)}</p>
          </div>
          
          <div style="margin: 20px 0;">
            <h3 style="color: #0b0c2b;">Mensagem:</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">
              ${escapeHtml(data.message)}
            </p>
          </div>
          
          <hr style="border: none; border-top: 1px solid #e8e5e0; margin: 20px 0;" />
          
          <p style="color: #6b6b6b; font-size: 12px; text-align: center;">
            Esta mensagem foi enviada através do formulário de contato do site da Dra. Erika Gonçalves.
          </p>
        </div>
      `,
      text: `
Nova Mensagem de Contato

Nome: ${data.name}
Email: ${data.email}
Telefone/WhatsApp: ${data.phone}

Mensagem:
${data.message}
      `,
    });

    // Enviar email de confirmação para o visitante
    await transporter.sendMail({
      from: `"Dra. Erika Gonçalves" <${process.env.GMAIL_USER}>`,
      to: data.email,
      subject: 'Recebemos sua mensagem - Dra. Erika Gonçalves',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #0b0c2b;">Obrigado por entrar em contato!</h2>
          
          <p>Olá <strong>${escapeHtml(data.name)}</strong>,</p>
          
          <p>Recebemos sua mensagem com sucesso. A Dra. Erika Gonçalves entrará em contato em breve através do email ou WhatsApp fornecido.</p>
          
          <div style="margin: 20px 0; background-color: #f5f3f0; padding: 15px; border-radius: 8px;">
            <p><strong>Seus dados:</strong></p>
            <p>Email: ${escapeHtml(data.email)}</p>
            <p>Telefone/WhatsApp: ${escapeHtml(data.phone)}</p>
          </div>
          
          <p>Se preferir, você também pode entrar em contato através do WhatsApp:</p>
          <p><a href="https://wa.me/5581982095424" style="color: #9f895d; text-decoration: none; font-weight: bold;">Clique aqui para abrir o WhatsApp</a></p>
          
          <hr style="border: none; border-top: 1px solid #e8e5e0; margin: 20px 0;" />
          
          <p style="color: #6b6b6b; font-size: 12px;">
            Atenciosamente,<br/>
            <strong>Dra. Erika Gonçalves</strong><br/>
            Psiquiatra - CRM PE 28636
          </p>
        </div>
      `,
      text: `
Obrigado por entrar em contato!

Olá ${data.name},

Recebemos sua mensagem com sucesso. A Dra. Erika Gonçalves entrará em contato em breve.

Se preferir, você também pode entrar em contato através do WhatsApp:
https://wa.me/5581982095424

Atenciosamente,
Dra. Erika Gonçalves
Psiquiatra - CRM PE 28636
      `,
    });

    return true;
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return false;
  }
}

/**
 * Escapar caracteres HTML para prevenir XSS
 */
function escapeHtml(text: string): string {
  const map: { [key: string]: string } = {
    '&': '&amp;',
    '<': '&lt;',
    '>': '&gt;',
    '"': '&quot;',
    "'": '&#039;',
  };
  return text.replace(/[&<>"']/g, (char) => map[char]);
}
