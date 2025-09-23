import { NextRequest, NextResponse } from 'next/server';
import { sendEmail, emailTemplates } from '@/lib/email';

export async function POST(request: NextRequest) {
  try {
    const { email } = await request.json();

    // Validation
    if (!email) {
      return NextResponse.json(
        { error: 'Email harus diisi' },
        { status: 400 }
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Format email tidak valid' },
        { status: 400 }
      );
    }

    // Send welcome email
    const emailResult = await sendEmail(
      emailTemplates.newsletterWelcome(email)
    );

    if (!emailResult.success) {
      console.error('Failed to send newsletter welcome email:', emailResult.error);
      return NextResponse.json(
        { error: 'Gagal mengirim email konfirmasi. Silakan coba lagi.' },
        { status: 500 }
      );
    }

    // Here you can also add the email to your newsletter database
    // Example: await addToNewsletter(email);

    return NextResponse.json({
      success: true,
      message: 'Berhasil berlangganan newsletter! Cek email untuk konfirmasi.'
    });

  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return NextResponse.json(
      { error: 'Terjadi kesalahan server' },
      { status: 500 }
    );
  }
}