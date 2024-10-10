
import nodemailer from "nodemailer";

require("dotenv").config();

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, phone, email, message } = body;

    console.log({ name, phone, email, message });
    //ovdje ide logika

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

  
    // Slanje emaila
    await transporter.sendMail({
      from: '"Beauty Studio" <beautystudiobyarnela@gmail.com>', // pošiljatelj
      to: "minelsalihagic@gmail.com", // tvoj email (gdje ćeš primati poruke)
      subject: `New message from ${name}`, // predmet emaila
      text: `Phone: ${phone}\nEmail: ${email}\nMessage: ${message}`, // tekst emaila
    });

    return new Response(
      JSON.stringify({ success: true, message: "Message sent!" }),
      {
        status: 200,
      }
    );
  } catch (error) {
    console.log("Error: ", error)
    return new Response(
      JSON.stringify({ success: false, error: "Message failed to send." }),
      {
        status: 500,
      }
    );
  }
}
