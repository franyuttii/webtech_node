import { Portafolio } from "../models/Portafolio.js";
import { Testimonial } from "../models/Testimoniales.js";

const paginaIncio = async (req, res) => {
  const promiseDB = [];
  promiseDB.push(Portafolio.findAll({ limit: 3 }));
  promiseDB.push(Testimonial.findAll({ limit: 3 }));

  try {
    const resultado = await Promise.all(promiseDB);
    res.render("inicio", {
      pagina: "Inicio",
      portafolios: resultado[0],
      testimoniales: resultado[1],
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaNosotros = (req, res) => {
  res.render("nosotros", {
    pagina: "Nosotros",
    css: "/css/internal.css",
  });
};

const paginaServicios = (req, res) => {
  res.render("servicios", {
    pagina: "Servicios",
    css: "/css/internal.css",
  });
};

const paginaServicioMantenimiento = (req, res) => {
  res.render("servicioMantenimiento", {
    pagina: "Mantenimiento Web",
    css: "/css/internal.css",
    faq: true,
  });
};

const paginaServicioHosting = (req, res) => {
  res.render("servicioHosting", {
    pagina: "Hosting Web",
    css: "/css/internal.css",
    faq: true,
  });
};

const paginaPortafolio = async (req, res) => {
  try {
    const resultado = await Portafolio.findAll();
    res.render("portafolios", {
      pagina: "Portafolio",
      portafolios: resultado,
      css: "/css/internal.css",
    });
  } catch (error) {
    console.log(error);
  }
};

//Muestra un portafolio por su slug
const paginaDetallePortafolio = async (req, res) => {
  const { slug } = req.params;

  const promiseDB = [];
  promiseDB.push(Portafolio.findOne({ where: { slug } }));
  promiseDB.push(Portafolio.findAll({ limit: 3 }));

  try {
    const resultado = await Promise.all(promiseDB);
    res.render("portafolio", {
      pagina: `Detalles - ${resultado[0].titulo}`,
      resultado: resultado[0],
      portafolios: resultado[1],
      css: "/css/internal.css",
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaTestimoniales = async (req, res) => {
  try {
    const testimoniales = await Testimonial.findAll();

    res.render("testimoniales", {
      pagina: "Testimoniales",
      testimoniales,
    });
  } catch (error) {
    console.log(error);
  }
};

const paginaContacto = (req, res) => {
  res.render("contacto", {
    pagina: "Contacto",
    css: "/css/internal.css",
  });
};

const paginaPoliticasDePrivacidad = (req, res) => {
  res.render("politicasPrivacidad", {
    pagina: "Políticas de Privacidad",
    css: "/css/internal.css",
  });
};

const paginaTerminosCondiciones = (req, res) => {
  res.render("terminosCondiciones", {
    pagina: "Términos y Condiciones",
    css: "/css/internal.css",
  });
};

export {
  paginaIncio,
  paginaNosotros,
  paginaServicios,
  paginaPortafolio,
  paginaContacto,
  paginaDetallePortafolio,
  paginaServicioMantenimiento,
  paginaTestimoniales,
  paginaServicioHosting,
  paginaPoliticasDePrivacidad,
  paginaTerminosCondiciones,
};
