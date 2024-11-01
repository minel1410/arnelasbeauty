import nodemailer from "nodemailer";

require("dotenv").config();

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    console.log({ name, phone, email, message });

    let transporter = nodemailer.createTransport({
      service: "gmail",
      host: "smtp.gmail.com",
      port: "587",
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // HTML šablon za email
    const htmlContent = `
  <div style="font-family: Arial, sans-serif; line-height: 1.6; background-color: #f9f9f9; padding: 20px; border-radius: 8px; box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);">
    <div style="background-color: #f06d6d; color: white; padding: 10px; border-radius: 8px 8px 0 0; text-align: center;">
      <h1>Nova rezervacija</h1>
    </div>
    <div style="margin: 20px 0;">
      <p>Poštovani,</p>
      <p>Primili ste novu rezervaciju. Ovdje su detalji:</p>
      <ul style="list-style-type: none; padding: 0;">
        <li><strong>Ime klijenta:</strong> ${name}</li>
        <li><strong>Telefon:</strong> ${phone}</li>
        <li><strong>Email:</strong> ${email}</li>
        <li><strong>Poruka:</strong></li>
        <p style="margin: 0; padding: 0;">${message}</p>
      </ul>
      <p>Hvala što ste nas odabrali!</p>
    </div>
    <div style="text-align: center; font-size: 12px; color: #777; margin-top: 20px;">
      <p>Za dodatne informacije, slobodno nas kontaktirajte.</p>
      <p>Srdačan pozdrav,<br>Beauty Studio by Arnela</p>
    </div>
  </div>
`;


    // Slanje emaila
    await transporter.sendMail({
      from: '"Beauty Studio" <beautystudiobyarnela@gmail.com>', // pošiljatelj
      to: "minelsalihagic@gmail.com", // tvoj email (gdje ćeš primati poruke)
      subject: `New message from ${name}`, // predmet emaila
      html: htmlContent, // HTML sadržaj emaila
    });

    return new Response(
      JSON.stringify({ success: true, message: "Message sent!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Error: ", error);
    return new Response(
      JSON.stringify({ success: false, error: "Message failed to send." }),
      {
        status: 500,
      }
    );
  }
}
