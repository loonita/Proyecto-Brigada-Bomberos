"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

const registerSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
        unique: false,
    },
    peso: {
        type: Number,
        required: true,
    },
    altura: {
        type: Number,
        required: true,
    },
    fechaNacimiento: {
        type: Date,
        required: true,
    },
    genero: {
        type: String,
        required: true,
    },
    telefono: {
        type: Number,
        required: true,
    },
    domicilio: {
        type: String,
        required: true,
    },
    imc: {
        type: Number,
        required: false,
    },
    fechaUpdate: {
        type: Date,
        required: false,
    },
});

// Crea el modelo de datos 'Role' a partir del esquema 'roleSchema'
const Register = mongoose.model("Register", registerSchema);
// Exporta el modelo de datos 'Register'
module.exports = Register;

