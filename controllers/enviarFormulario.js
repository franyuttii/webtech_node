import nodemailer from "nodemailer";
import dotenv from "dotenv";
import { Mensaje } from "../models/Mensaje.js";

const nodeMail = nodemailer;
dotenv.config();

const enviarFormulario = async (req, res) => {
  //Validar
  const { nombre, email, celular, estado, mensaje } = req.body;
  const errores = [];

  if(nombre.trim() === '') {
    errores.push({mensaje: 'El nombre esta vacio'});
  }

  if(email.trim() === '' || !validateEmail(email)) {
    errores.push({mensaje: 'El email no es valido'});
  }

  if(celular.trim() === '') {
    errores.push({mensaje: 'El celular esta vacio'});
  }

  function validateEmail(email) {
    var emailFormat = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
    if (email !== '' && email.match(emailFormat)) { return true; }
    
    return false;
}

  if(errores.length > 0) {
    //Mostrar la vista con errores 
    res.render('contacto', {
      pagina: 'Contacto', 
      css: "/css/internal.css",
      errores, 
      nombre, 
      email,
      celular, 
      estado, 
      mensaje
    })
    return;
  } else {
    //Enviar mensaje por correo y almacenarlo en la base de datos
    try {
      await Mensaje.create({
        nombre, 
        email,
        celular, 
        estado,
        mensaje
      });
      await mainMail(nombre, email, celular, estado, mensaje);
      res.redirect('/contacto');
    } catch (error) {
      console.log(error);
    }
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
