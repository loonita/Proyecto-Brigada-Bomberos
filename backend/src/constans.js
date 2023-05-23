const { Schema, model } = require("mongoose");
const ROLES = [
  "user",
  "admin",
  "nutricionista",
  "brigadista",
  "prepadador fisico",
  "jefe de brigada",
];
module.exports = { ROLES };
