import express from "express";
import {
  paginaIncio,
  paginaNosotros,
  paginaServicios,
  paginaPortafolio,
  paginaContacto,
  paginaDetallePortafolio,
  paginaServicioMantenimiento,
  paginaTestimoniales
} from "../controllers/paginasController.js";
import { 
  guardarTestimonial 
} from "../controllers/testimonialController.js";

const router = express.Router();

router.get("/", paginaIncio);

router.get("/nosotros", paginaNosotros);

router.get("/servicios", paginaServicios);
router.get("/servicios/mantenimiento", paginaServicioMantenimiento);

router.get("/portafolio", paginaPortafolio);
router.get("/portafolio/:slug", paginaDetallePortafolio);

router.get("/testimoniales", paginaTestimoniales);
router.post("/testimoniales", guardarTestimonial);

router.get("/contacto", paginaContacto);

export default router;
