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
});

const CitaPreparador = mongoose.model(
    "CitaPreparador",
    citaPreparadorSchema,
);

// aqui se exporta el modelo de datos "User" para poder usarlo en otros archivos
module.exports = CitaPreparador;
