const mongoose = require("mongoose");

const avisoCitaSchema = new mongoose.Schema({
  fecha: {
    type: Date,
    required: true,
  },
  nutricionista: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "citaNutricionista",
  },
  preparadorFisico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "citaPreparador",
  },
  usuario: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
});

const AvisoCita = mongoose.model("AvisoCita", avisoCitaSchema);

module.exports = AvisoCita;
