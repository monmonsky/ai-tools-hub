// Email service configuration for MXrouting SMTP
import nodemailer from 'nodemailer';

export interface EmailConfig {
  host: string;
  port: number;
  secure: boolean;
  auth: {
    user: string;
    pass: string;
  };
}

export interface EmailTemplate {
  to: string;
  subject: string;
  html: string;
  text?: string;
}

// Create SMTP transporter for MXrouting
export const createEmailTransporter = () => {
  return nodemailer.createTransporter({
    host: process.env.SMTP_HOST || 'your-server.mxrouting.net',
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER || 'admin@aikita.id',
      pass: process.env.SMTP_PASS || 'your-email-password',
    },
    tls: {
      rejectUnauthorized: false
    }
  });
};

// Send email function
export const sendEmail = async (emailData: EmailTemplate) => {
  try {
    const transporter = createEmailTransporter();

    const mailOptions = {
      from: {
        name: process.env.SMTP_FROM_NAME || 'Aikita Team',
        address: process.env.SMTP_FROM || 'admin@aikita.id'
      },
      to: emailData.to,
      subject: emailData.subject,
      html: emailData.html,
      text: emailData.text || emailData.html.replace(/<[^>]*>/g, ''), // Strip HTML for text version
    };

    const result = await transporter.sendMail(mailOptions);
    console.log('Email sent successfully:', result.messageId);
    return { success: true, messageId: result.messageId };
  } catch (error) {
    console.error('Email send error:', error);
    return { success: false, error: error };
  }
};

// Email templates
export const emailTemplates = {
  // Newsletter subscription confirmation
  newsletterWelcome: (email: string) => ({
    to: email,
    subject: 'Selamat Datang di Aikita Newsletter! 🎉',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <div style="text-align: center; margin-bottom: 30px;">
          <h1 style="color: #6366f1; margin: 0;">Aikita</h1>
          <p style="color: #666; margin: 5px 0;">Direktori AI Tools Terlengkap Indonesia</p>
        </div>

        <h2 style="color: #333;">Selamat Datang! 👋</h2>

        <p style="color: #555; line-height: 1.6;">
          Terima kasih telah bergabung dengan newsletter Aikita! Anda sekarang akan mendapatkan:
        </p>

        <ul style="color: #555; line-height: 1.8;">
          <li>🔥 Update AI tools terbaru setiap minggu</li>
          <li>📊 Review mendalam tools AI trending</li>
          <li>💡 Tips & tricks menggunakan AI untuk bisnis</li>
          <li>🎯 Rekomendasi tools sesuai kebutuhan Anda</li>
        </ul>

        <div style="text-align: center; margin: 30px 0;">
          <a href="https://aikita.id"
             style="background: linear-gradient(135deg, #06b6d4, #8b5cf6);
                    color: white;
                    padding: 12px 24px;
                    text-decoration: none;
                    border-radius: 8px;
                    display: inline-block;">
            Jelajahi AI Tools
          </a>
        </div>

        <div style="border-top: 1px solid #eee; padding-top: 20px; margin-top: 30px; color: #999; font-size: 14px;">
          <p>Ikuti kami:</p>
          <p>
            <a href="https://facebook.com/aikita.id" style="color: #6366f1;">Facebook</a> •
            <a href="https://twitter.com/aikita_id" style="color: #6366f1;">Twitter</a> •
            <a href="https://linkedin.com/company/aikita-indonesia" style="color: #6366f1;">LinkedIn</a>
          </p>
          <p>© 2024 Aikita. Jakarta, Indonesia</p>
        </div>
      </div>
    `
  }),

  // Contact form submission
  contactForm: (name: string, email: string, message: string) => ({
    to: process.env.ADMIN_EMAIL || 'admin@aikita.id',
    subject: `[Aikita] Pesan Kontak dari ${name}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #6366f1;">Pesan Kontak Baru</h2>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nama:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Pesan:</strong></p>
          <div style="background: white; padding: 15px; border-radius: 4px; margin-top: 10px;">
            ${message.replace(/\n/g, '<br>')}
          </div>
        </div>

        <p style="color: #666; font-size: 14px;">
          Dikirim dari website Aikita.id pada ${new Date().toLocaleString('id-ID')}
        </p>
      </div>
    `
  }),

  // Tool submission notification
  toolSubmission: (toolName: string, submitterEmail: string, toolUrl: string) => ({
    to: process.env.ADMIN_EMAIL || 'admin@aikita.id',
    subject: `[Aikita] Tool Baru Disubmit: ${toolName}`,
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
        <h2 style="color: #6366f1;">Tool Baru Disubmit</h2>

        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
          <p><strong>Nama Tool:</strong> ${toolName}</p>
          <p><strong>URL Tool:</strong> <a href="${toolUrl}">${toolUrl}</a></p>
          <p><strong>Submitter:</strong> ${submitterEmail}</p>
        </div>

        <p style="color: #666; font-size: 14px;">
          Silakan review dan tambahkan ke database jika sesuai.
        </p>
      </div>
    `
  })
};

// Test email connection
export const testEmailConnection = async () => {
  try {
    const transporter = createEmailTransporter();
    await transporter.verify();
    console.log('✅ SMTP connection successful');
    return { success: true };
  } catch (error) {
    console.error('❌ SMTP connection failed:', error);
    return { success: false, error };
  }
};