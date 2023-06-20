import Sequelize from "sequelize";
import db from "../config/db.js";

export const Mensaje = db.define("mensajes", {
    nombre: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    celular: {
      type: Sequelize.STRING,
    },
    estado: {
      type: Sequelize.STRING,
    },
    mensaje: {
      type: Sequelize.STRING,
    },
});

