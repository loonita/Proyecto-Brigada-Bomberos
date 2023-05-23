"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

// Importa el controlador de usuarios
const citaController = require("../controllers/citaNutricionista.controller.js");
// Importa el middleware de autorización
const authoMiddleware = require("../middlewares/autho.middleware.js");

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios
router.get("/", citaController.getCitaNutricionista);
router.post(
  "/",
  authoMiddleware.isNutricionista, 
  citaController.createCitaNutricionista,
);
router.get("/:id", citaController.getCitaNutricionistaById);
router.put(
  "/:id",
  authoMiddleware.isNutricionista,
  citaController.updateCitaNutricionista,
);
router.delete(
  "/:id",
  authoMiddleware.isNutricionista,
  citaController.deleteCitaNutricionista,
);

// Exporta el enrutador
module.exports = router;
