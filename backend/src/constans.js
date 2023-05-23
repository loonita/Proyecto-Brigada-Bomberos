const { Schema, model } = require("mongoose");
const ROLES = [
  "user",
  "admin",
  "nutricionista",
  "brigadista",
  "preparador_fisico",
  "jefe_de_brigada",
];
module.exports = { ROLES };
