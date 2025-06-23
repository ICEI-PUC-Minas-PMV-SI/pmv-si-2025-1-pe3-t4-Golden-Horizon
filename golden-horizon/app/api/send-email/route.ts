import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { email, message } = await request.json();

    if (!email || !message) {
      return NextResponse.json({ message: 'Preencha todos os campos.' }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: 'goldenhorizonreserva@gmail.com',
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: email,
      to: 'goldenhorizonreserva@gmail.com',
      subject: 'Mensagem do formulário de contato',
      text: message,
      replyTo: email,
    });

    return NextResponse.json({ message: 'Mensagem enviada com sucesso!' });
  } catch (error) {
    return NextResponse.json(
      { message: 'Erro ao enviar e-mail.', error: (error as Error).toString() },
      { status: 500 }
    );
  }
}