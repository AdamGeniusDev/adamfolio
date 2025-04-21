import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, contact, project } = await req.json();

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user:'adamridwane02@gmail.com',
      pass: 'edzc cfud wsza hnab',
    },
  });

  try {
    await transporter.sendMail({
      from: 'email',
      to: process.env.NEXT_PUBLIC_GMAIL_USER, // toi
      subject: `Nouveau message de ${name}`,
      replyTo: email,
      html: `
        <p><strong>Nom:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Contact:</strong> ${contact}</p>
        <p><strong>Projet:</strong><br/>${project}</p>
      `,
    });

    return NextResponse.json({ message: "Message envoyé avec succès" }, { status: 200 });
  } catch (error) {
    console.error("Erreur d'envoi:", error);
    return NextResponse.json({ message: "Erreur d’envoi", error}, { status: 500 });
  }
}
