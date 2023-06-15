import nodemailer from "nodemailer";
import dotenv from "dotenv";

const nodeMail = nodemailer;
dotenv.config();

const enviarFormulario = async (req, res) => {
  const { nombre, email, celular, estado, mensaje } = req.body;
  try {
    await mainMail(nombre, email, celular, mensaje);
    console.log("Message Successfully Sent!");
    res.redirect("/contacto")
  } catch (error) {
    console.log(error);
  }
};

async function mainMail(nombre, email, celular, estado, mensaje) {
  const transporter = await nodeMail.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_HOST,
    secure: true, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER, // generated ethereal user
      pass: process.env.SMTP_PASS, // generated ethereal password
    },
  });
  const mailOption = {
    from: process.env.SMTP_USER,
    to: process.env.SMTP_USER,
    subject: nombre,
    html: `
      <h1>Formulario de Contacto</h1>
      <br>
      Email: ${email}
      <br>
      Nombre: ${nombre}
      <br>
      Estado: ${estado}
      <br>
      Celular: ${celular}
      <br>
      Mensaje: ${mensaje}`,
  };
  try {
    await transporter.sendMail(mailOption);
    return Promise.resolve("Message Sent Successfully!");
  } catch (error) {
    return Promise.reject(error);
  }
}

export { enviarFormulario };
