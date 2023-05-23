const AvisoCita = require("../models/citaAviso.model");

// Crear un aviso de cita
async function createAvisoCita(avisoCitaData) {
  try {
    const nuevoAvisoCita = await AvisoCita.create(avisoCitaData);
    return nuevoAvisoCita;
  } catch (error) {
    throw new Error("No se pudo crear el aviso de cita");
  }
}

// Obtener todos los avisos de citas
async function getAvisosCitas() {
  try {
    const avisosCitas = await AvisoCita.find().exec();
    return avisosCitas;
  } catch (error) {
    throw new Error("No se pudieron obtener los avisos de citas");
  }
}

module.exports = {
  createAvisoCita,
  getAvisosCitas,
};
