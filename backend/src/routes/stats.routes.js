"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");
// Importa el controlador de usuarios
const statsController = require("../controllers/stats.controller.js");
// Importa el controlador de usuarios
const router = express.Router();

// Define las rutas para los usuarios
router.get("/:id", statsController.getOnlyUser);
router.get("/", statsController.getAllUsers);
router.get("/registro/:id", statsController.getRegistro);

module.exports = router;
