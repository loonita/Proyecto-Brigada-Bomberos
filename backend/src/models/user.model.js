"use strict";
// Importa el modulo 'mongoose' para crear la conexion a la base de datos
const mongoose = require("mongoose");

// Crea el esquema de la coleccion 'usuarios'
const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  roles: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Role",
      required: true,
    },
  ],
  peso: {
    type: Number,
    required: true,
    unique: false,
    default: 0.0,
  },
  altura: {
    type: Number,
    required: true,
    unique: false,
    default: 0.0,
  },
  fechaNacimiento: {
    type: Date,
    required: true,
  },
  genero: {
    type: String,
    required: true,
    unique: false,
  },
  telefono: {
    type: Number,
    required: true,
    unique: true,
  },
  rut: {
    type: Number,
    required: true,
    unique: true,
  },
  domicilio: {
    type: String,
    required: true,
    unique: false,
  },
  imc: {
    type: Number,
    required: false,
    unique: false,
  },
  // cambios de noche
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

// Crea el modelo de datos 'User' a partir del esquema 'userSchema'
const User = mongoose.model("User", userSchema);

// Exporta el modelo de datos 'User'
module.exports = User;
