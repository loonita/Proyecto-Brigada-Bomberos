const mongoose = require("mongoose");
const PDFDocument = require('pdfkit');
const fs = require('fs');

const citaPreparadorSchema = new mongoose.Schema({
  preparador_fisico: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  brigadista: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  fecha: {
    type: Date,
    required: true,
  },
  nombreEjercicio: {
    type: String,
    required: true,
  },
  categoriaEjercicio: {
    type: String,
    required: true,
  },
  enfoqueEjercicio: {
    type: String,
    required: true,
  },
  seriesEjercicio: {
    type: Number,
    required: true,
  },
  repeticionesEjercicio: {
    type: Number,
    required: true,
  },
});

const CitaPreparador = mongoose.model("CitaPreparador", citaPreparadorSchema);

module.exports = CitaPreparador;

