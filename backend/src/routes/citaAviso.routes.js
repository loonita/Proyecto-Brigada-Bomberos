const express = require("express");
const router = express.Router();
const avisoCitaController = require("../controllers/citaAviso.controller");
const authMiddleware = require("../middlewares/autho.middleware");

// Ruta para crear un aviso de cita
router.post("/", avisoCitaController.createAvisoCita);

// Ruta para obtener todos los avisos de citas
router.get("/", authMiddleware.isBrigadista, avisoCitaController.getAvisosCitas);

module.exports = router;
