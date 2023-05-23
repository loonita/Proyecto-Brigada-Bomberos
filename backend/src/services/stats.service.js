"use strict";
// Importa el modelo de datos 'User'
const User = require("../models/user.model.js");
const _ = require("lodash");
const { handleError } = require("../utils/errorHandler");
const registrarCambios = [];
const totalEdades = [];
/**
 * @typedef User
 * @property {string} _id
 * @property {String} name
 * @property {String} email
*/

/**
  * @name calculateUserStats
  * @description Calcula las estadísticas de un usuario
  * @param id {string} - Id del usuario
  * @returns {Promise<{}|null>}
*/
async function calculateUserStats(id) {
    try {
      const user = await User.findById(id);

      const edad = new Date().getFullYear() - user.fechaNacimiento.getFullYear();
      totalEdades.push(edad);
      const peso = user.peso;
      const altura = user.altura / 100; // Convertir la altura de cm a m
      const imc = peso / (altura * altura);
      // Crear objeto con las estadísticas
      const estadisticas = {
        edad: edad,
        peso: peso,
        altura: altura,
        imc: imc,
      };
      return estadisticas;
    } catch (error) {
      handleError(error, "stats.service -> calculateUserStats");
    }
}

/**
 * @name calculateAllStats
 * @description Calcula las estadísticas de todos los usuarios
 * @returns {Promise<{}|null>}
  */
async function calculateAllStats(users) {
  try {
    console.log(users);
    const promedioEdad = _.sum(totalEdades) / totalEdades.length;
    const promedioAltura = _.sumBy(users, "altura") / users.length;
    const promedioPeso = _.sumBy(users, "peso") / users.length;
    const promedioIMC = promedioAltura / promedioPeso * promedioPeso;
    return {
      promedioEdad: promedioEdad,
      promedioIMC: promedioIMC,
      promedioAltura: promedioAltura,
      promedioPeso: promedioPeso,
    };
  } catch (err) {
    handleError(error, "stats.service -> calculateAllStats");
    return null;
  }
}

/**
 * @name registroCambio
 * @description Registra los cambios realizados en los usuarios
 * @param userparams {string} - Id del usuario
*/
function registroCambio(user) {
    registrarCambios.push(user);
}

module.exports = {
    calculateUserStats,
    calculateAllStats,
    registroCambio,
};
