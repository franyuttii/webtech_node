import express from "express";
import {
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
  paginaTerminosCondiciones
} from "../controllers/paginasController.js";
import { 
  guardarTestimonial 
} from "../controllers/testimonialController.js";
import { enviarFormulario } from "../controllers/enviarFormulario.js";

const router = express.Router();

router.get("/", paginaIncio);

router.get("/nosotros", paginaNosotros);

router.get("/servicios", paginaServicios);
router.get("/servicios/mantenimiento", paginaServicioMantenimiento);
router.get("/servicios/hosting", paginaServicioHosting);

router.get("/portafolio", paginaPortafolio);
router.get("/portafolio/:slug", paginaDetallePortafolio);

router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimonial);

router.get("/contacto", paginaContacto);
router.post("/contacto", enviarFormulario);


router.get("/politicas-de-privacidad", paginaPoliticasDePrivacidad);
router.get("/terminos-y-condiciones", paginaTerminosCondiciones);

export default router;
