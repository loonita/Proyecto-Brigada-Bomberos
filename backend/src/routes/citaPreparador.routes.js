"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

// Importa el controlador de usuarios
const citaController = require("../controllers/citaPreparador.controller.js");
// Importa el middleware de autorización
const authoMiddleware = require("../middlewares/autho.middleware.js");

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios
router.get("/", citaController.getCitaPreparador);
router.post(
  "/",
  authoMiddleware.isPreparador,
  citaController.createCitaPreparador,
);
router.get("/:id", citaController.getCitaPreparadorById);
router.put(
  "/:id",
  authoMiddleware.isPreparador,
  citaController.updateCitaPreparador,
);
router.delete(
  "/:id",
  authoMiddleware.isPreparador,
  citaController.deleteCitaPreparador,
);

// Exporta el enrutador
module.exports = router;
