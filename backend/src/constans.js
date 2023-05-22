const { Schema, model } = require("mongoose");
const ROLES = [
  "user",
  "admin",
  "nutricionista",
  "brigadista",
  "preparador_fisico",
  "jefe de brigada",
];
module.exports = { ROLES };
