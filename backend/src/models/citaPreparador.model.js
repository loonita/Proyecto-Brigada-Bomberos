// const { boolean } = require("joi");
const mongoose = require("mongoose");

// se crea el modelo como tal
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
    invalid: {  
        type: Boolean,
        default: false,
        required: false,
    },
    // mis cambios de noche, se agrego nombre, categoria, enfoque, series, repeticiones.
    nombreEjercicio: {
        type: String,
        ref: "User",
        required: true,
      },
    categoriaEjercicio: {
        type: String,
        ref: "User",
        required: true,
    },
    enfoqueEjercicio: {
        type: String,
        ref: "User",
        required: true,
    },
    seriesEjercicio: {
        type: Number,
        ref: "User",
        required: true,
    },
    repeticionesEjercicio: {
        type: Number,
        ref: "User",
        required: true,
    },
});

const CitaPreparador = mongoose.model(
    "CitaPreparador",
    citaPreparadorSchema,
);

// aqui se exporta el modelo de datos "User" para poder usarlo en otros archivos
module.exports = CitaPreparador;
