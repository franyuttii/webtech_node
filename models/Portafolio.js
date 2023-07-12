import Sequelize from "sequelize";
import db from "../config/db.js";

export const Portafolio = db.define("portafolios", {
    titulo: {
      type: Sequelize.STRING,
    },
    categoria: {
      type: Sequelize.STRING,
    },
    cliente: {
      type: Sequelize.STRING,
    },
    fecha_creacion: {
      type: Sequelize.DATE,
    },
    fecha_lanzamiento: {
      type: Sequelize.DATE,
    },
    imagen: {
      type: Sequelize.STRING,
    },
    imagen_destacada: {
      type: Sequelize.STRING,
    },
    descripcion_corta: {
      type: Sequelize.STRING,
    },
    descripcion: {
      type: Sequelize.STRING,
    },
    tecnologia: {
      type: Sequelize.STRING,
    },
    slug: {
      type: Sequelize.STRING,
    },
});
  