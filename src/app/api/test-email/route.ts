import { NextRequest, NextResponse } from 'next/server';
import { testEmailConnection, sendEmail } from '@/lib/email';

export async function GET() {
  try {
    console.log('🧪 Testing email configuration...');

    // Test SMTP connection
    const connectionTest = await testEmailConnection();

    if (!connectionTest.success) {
      return NextResponse.json({
        success: false,
        error: 'SMTP connection failed',
        details: connectionTest.error
      }, { status: 500 });
    }

    // Send test email
    const testEmail = {
      to: 'admin@aikita.id',
      subject: '🧪 Test Email dari Aikita',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
          <h2 style="color: #6366f1;">Test Email Berhasil! 🎉</h2>

          <p>Email service Aikita berfungsi dengan baik:</p>

          <ul>
            <li>✅ SMTP Connection: Success</li>
            <li>✅ Authentication: Success</li>
            <li>✅ Email Delivery: Success</li>
          </ul>

          <div style="background: #f8fafc; padding: 15px; border-radius: 8px; margin: 20px 0;">
            <h3>Configuration Details:</h3>
            <p><strong>Host:</strong> ${process.env.SMTP_HOST}</p>
            <p><strong>Port:</strong> ${process.env.SMTP_PORT}</p>
            <p><strong>From:</strong> ${process.env.SMTP_FROM}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString('id-ID')}</p>
          </div>

          <p style="color: #666; font-size: 14px;">
            Dikirim otomatis dari sistem test Aikita.id
          </p>
        </div>
      `
    };

    const emailResult = await sendEmail(testEmail);

    if (!emailResult.success) {
      return NextResponse.json({
        success: false,
        error: 'Failed to send test email',
        details: emailResult.error
      }, { status: 500 });
    }

    return NextResponse.json({
      success: true,
      message: 'Email test berhasil! Check inbox admin@aikita.id',
      messageId: emailResult.messageId,
      smtp: {
        host: process.env.SMTP_HOST,
        port: process.env.SMTP_PORT,
        user: process.env.SMTP_USER
      }
    });

  } catch (error) {
    console.error('Email test error:', error);
    return NextResponse.json({
      success: false,
      error: 'Server error during email test',
      details: error
    }, { status: 500 });
  }
}