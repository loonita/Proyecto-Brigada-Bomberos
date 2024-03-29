"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

// Importa el controlador de usuarios
const usuarioController = require("../controllers/user.controller.js");

// Importa el middleware de autorización
const authoMiddleware = require("../middlewares/autho.middleware.js");

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios
router.get("/", usuarioController.getUsers);
router.get("/csv", usuarioController.getUsersCSV);
router.get("/brigadistas", usuarioController.getBrigadistas);
router.get("/nutricionistas", usuarioController.getNutricionistas)
router.post("/", authoMiddleware.isAdmin, usuarioController.createUser);
router.get("/:id", usuarioController.getUserById);
router.get("/csv/:id", usuarioController.getUserByIdCSV);
router.put(
  "/:id",
  authoMiddleware.isNutricionista ||
    authoMiddleware.isPreparador ||
    authoMiddleware.isAdmin,
  usuarioController.updateUser,
);
router.delete("/:id", authoMiddleware.isAdmin, usuarioController.deleteUser);

// Exporta el enrutador
module.exports = router;
