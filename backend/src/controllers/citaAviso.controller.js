const AvisoCitaService = require("../services/citaAviso.service");
const CitaNutricionista = require("../models/citaNutricionista.model");
const CitaPreparador = require("../models/citaPreparador.model");

// Controlador para crear un aviso de cita
async function createAvisoCita(req, res) {
    try {
    // Obtener las citas agendadas con el nutricionista
    const citasNutricionista = await CitaNutricionista.find({}).exec();

    // Obtener las citas agendadas con el preparador físico
    const citasPreparador = await CitaPreparador.find({}).exec();

    // Crear el aviso de cita
    const avisoCitaData = {
        citasNutricionista,
        citasPreparador,
    };

    const nuevoAvisoCita = await AvisoCitaService.createAvisoCita(avisoCitaData);
    respondSuccess(req, res, 201, nuevoAvisoCita);
    console.log("Aviso de cita creado");
    } catch (error) {
    handleError(error, "avisoCita.controller -> createAvisoCita");
    respondError(req, res, 500, "No se pudo crear el aviso de cita");
    }
}

// Controlador para obtener los avisos de citas
async function getAvisosCitas(req, res) {
    try {
      // Obtener los avisos de citas
        const avisosCitas = await AvisoCita.find();
      // Devolver los avisos de citas como respuesta
        res.json(avisosCitas);
    } catch (error) {
      // Ocurrió un error al obtener los avisos de citas
        console.error(error);
        res.status(500).json({ message: "Ocurrió un error al obtener los avisos de citas" });
    }
}

module.exports = {
    createAvisoCita,
    getAvisosCitas,
};

