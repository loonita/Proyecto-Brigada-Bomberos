const mongoose = require("mongoose");
const PDFDocument = require('pdfkit');
const fs = require('fs');

const citaPreparadorSchema = new mongoose.Schema({
  preparador_fisico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  brigadista: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  fecha: {
    type: Date,
  },
  nombreEjercicio: {
    type: String,
  },
  categoriaEjercicio: {
    type: String,
  },
  enfoqueEjercicio: {
    type: String,
  },
  seriesEjercicio: {
    type: Number,
  },
  repeticionesEjercicio: {
    type: Number,
  },
});

const CitaPreparador = mongoose.model("CitaPreparador", citaPreparadorSchema);

module.exports = CitaPreparador;

