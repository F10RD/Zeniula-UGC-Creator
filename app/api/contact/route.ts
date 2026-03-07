import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const { name, email, message } = await req.json();

  try {
    // Mail 1: DO ZENIULI (pełna wiadomość)
    await resend.emails.send({
      from: 'Zeniula UGC <onboarding@resend.dev>',  // Nazwa + fallback
      to: 'zeniula.ugc@gmail.com',
      replyTo: email,
      subject: `📩 Nowa wiadomość z portfolio: ${name}`,
      html: `
        <div style="max-width: 600px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #333;">
          <h1 style="color: #6d1030; font-size: 28px;">Nowa wiadomość z zeniula.pl</h1>
          <div style="background: #fdf8f3; padding: 20px; border-radius: 8px; border-left: 4px solid #8B1538;">
            <p><strong>👤 Imię:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>💬 Wiadomość:</strong></p>
            <div style="background: white; padding: 16px; border-radius: 6px; border-left: 3px solid #8B1538; margin: 12px 0;">
              ${message.replace(/\n/g, '<br>')}
            </div>
          </div>
          <hr style="border: none; border-top: 1px solid #eee; margin: 24px 0;">
          <p style="font-size: 14px; color: #666;">
            <a href="https://www.zeniula.pl" style="color: #8B1538; text-decoration: none;">www.zeniula.pl</a> | UGC Creator
          </p>
        </div>
      `,
    });
    console.log('✅ Mail do Zeniuli WYSŁANY');

    // Mail 2: DO KLIENTA (potwierdzenie)
    console.log('📤 Wysyłam do klienta:', { to: email });
    await resend.emails.send({
      from: 'Zeniula UGC <onboarding@resend.dev>',
      to: email,
      subject: 'Dziękujemy za wiadomość! 👋 Odezwę się wkrótce',
      html: `
        <div style="max-width: 500px; margin: 0 auto; font-family: -apple-system, BlinkMacSystemFont, sans-serif; line-height: 1.6; color: #333;">
          <h1 style="color: #6d1030;">Cześć ${name}! 👋</h1>
          <p>Dziękuję za wiadomość z mojego portfolio. Obejrzałam ją i <strong>odezwę się do Ciebie najpóźniej w ciągu 24h</strong>.</p>
          <p>📝 Twoja wiadomość: "${message.substring(0, 100)}..."</p>
          <hr style="border: none; border-top: 1px solid #eee;">
          <p style="font-size: 14px; color: #666;">
            Pozdrawiam,<br>
            <strong>Zeniula</strong><br>
            UGC Creator | Beauty & Lifestyle<br>
            <a href="https://www.zeniula.pl" style="color: #8B1538;">www.zeniula.pl</a>
          </p>
        </div>
      `,
    });
    console.log('✅ Mail do klienta WYSŁANY');
    
    console.log('🎉 Oba maile wysłane pomyślnie!');
    return NextResponse.json({ ok: true, message: 'Wiadomość wysłana! Dziękujemy.' });
  } catch (error) {
    console.error('Resend error:', error);
    return NextResponse.json({ 
      ok: false, 
      message: 'Błąd wysyłania. Spróbuj ponownie za chwilę.' 
    }, { status: 500 });
  }
}
