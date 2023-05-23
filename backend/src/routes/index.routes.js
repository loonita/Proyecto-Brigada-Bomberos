const express = require("express");
const userRoutes = require("./user.routes.js");
// Importa el enrutador de autenticación
const authRoutes = require("./auth.routes.js");
// Importa el middleware de autenticación
const authMiddleware = require("../middlewares/authe.middleware.js");
// Importa el enrutador de estadisticas
const statsRoutes = require("./stats.routes.js");

const citaNutricionistaRoutes = require("./citaNutricionista.routes.js");
const citaPreparadorRoutes = require("./citaPreparador.routes.js");
const roleRoutes = require("./role.routes.js");

// Crea una instancia del enrutador
const router = express.Router();

// Define las rutas para los usuarios /api/usuarios
router.use("/users", authMiddleware.verifyToken, userRoutes);
// Define las rutas para la autenticación /api/auth
router.use("/auth", authRoutes);
router.use("/stats", statsRoutes);

router.use(
  "/citaNutricionista",
  authMiddleware.verifyToken,
  citaNutricionistaRoutes,
);

router.use(
  "/citaPreparador",
  authMiddleware.verifyToken,
  citaPreparadorRoutes,
);

router.use(
  "/messages", 
  authMiddleware.verifyToken, roleRoutes,
  );

router.use("/roles", authMiddleware.verifyToken, roleRoutes);

// Exporta el enrutador
module.exports = router;
