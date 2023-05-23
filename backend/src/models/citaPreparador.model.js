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

CitaPreparador.prototype.generarPDF = function() {
  return new Promise((resolve, reject) => {
    const doc = new PDFDocument();
    const filePath = 'src/pdfs/archivo.pdf'; // Reemplaza 'ruta/al/archivo.pdf' por la ruta deseada donde se guardará el archivo PDF

    doc.pipe(fs.createWriteStream(filePath));

    doc.fontSize(18).text('Mi Documento PDF', { align: 'center' });
    doc.moveDown();

    doc.fontSize(12).text(`Preparador Físico: ${this.preparador_fisico}`);
    doc.fontSize(12).text(`Brigadista: ${this.brigadista}`);
    doc.fontSize(12).text(`Fecha: ${this.fecha}`);
    doc.fontSize(12).text(`Nombre de Ejercicio: ${this.nombreEjercicio}`);
    doc.fontSize(12).text(`Categoría de Ejercicio: ${this.categoriaEjercicio}`);
    doc.fontSize(12).text(`Enfoque de Ejercicio: ${this.enfoqueEjercicio}`);
    doc.fontSize(12).text(`Series de Ejercicio: ${this.seriesEjercicio}`);
    doc.fontSize(12).text(`Repeticiones de Ejercicio: ${this.repeticionesEjercicio}`);

    doc.end();
    resolve(filePath);
  });
};

module.exports = CitaPreparador;

