"use strict";
// Importa el modulo 'express' para crear las rutas
const express = require("express");

// Importa el enrutador de usuarios
const userRoutes = require("./user.routes.js");
// Importa el enrutador de autenticación
const authRoutes = require("./auth.routes.js");
// Importa el middleware de autenticación
const authMiddleware = require("../middlewares/authe.middleware.js");

const citaPreparadorRoutes = require("./citaPreparador.routes.js");
const roleRoutes = require("./role.routes.js");

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use("/users", authMiddleware.verifyToken, userRoutes);
// Define las rutas para la autenticación /api/auth
router.use("/auth", authRoutes);

router.use(
    "/citaPreparador",
    authMiddleware.verifyToken,
    citaPreparadorRoutes,
  );
  
  router.use("/roles", authMiddleware.verifyToken, roleRoutes);

// Exporta el enrutador
module.exports = router;
