const mongoose = require("mongoose");

const citaNutricionistaSchema = new mongoose.Schema({
  nutricionista: {
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
    required: true,
  },
});

const CitaNutricionista = mongoose.model(
  "CitaNutricionista",
  citaNutricionistaSchema,
);

// Exporta el modelo de datos 'User'
module.exports = CitaNutricionista;
