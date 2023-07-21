"use strict";
// Importa el modelo de datos 'User'
const User = require("../models/user.model.js").default;
const _ = require("lodash");
const { handleError } = require("../utils/errorHandler");
const change = require("../models/registro.model.js");

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
    const sumaFechas = users.reduce((acc, user) => {
      const edad = new Date().getFullYear() - user.fechaNacimiento.getFullYear();
      return acc + edad;
    }, 0);
    
    const promedioEdad = sumaFechas / users.length;
    const promedioAltura = _.sumBy(users, "altura") / users.length;
    const promedioPeso = _.sumBy(users, "peso") / users.length;
    const promedioIMC = promedioAltura / promedioPeso * promedioPeso;
    return {
      promedioEdad: promedioEdad,
      promedioAltura: promedioAltura,
      promedioPeso: promedioPeso,
      promedioIMC: promedioIMC,
    };
  } catch (err) {
    handleError(error, "stats.service -> calculateAllStats");
    return null;
  }
}

/**
 * @name mostrarRegistros
 * @description Muestra los registros de un usuario
 * @param id {string} - Id del usuario
 * @returns {Promise<{}|null>}
*/
async function mostrarRegistros(id) {
  try {
    const registros = await change.find({ id: id }).sort({ fechaUpdate: -1 });
    return registros;
  } catch (error) {
    handleError(error, "stats.service -> mostrarRegistros");
  }
}

/**
 * @name registrarCambios
 * @description Registra los cambios de un usuario
 * @param id {string} - Id del usuario
 * @param user {User} - Objeto con los datos del usuario
 * @returns {Promise<{}|null>}
*/
async function registrarCambios(user) {
  try {
    const cambios = new change({
      name: user.name,
      email: user.email,
      peso: user.peso,
      altura: user.altura,
      fechaNacimiento: user.fechaNacimiento,
      genero: user.genero,
      telefono: user.telefono,
      domicilio: user.domicilio,
      imc: user.imc,
      fechaUpdate: new Date(),
    });
    return await cambios.save();
  } catch (error) {
    handleError(error, "stats.service -> registrarCambios");
  }
}

module.exports = {
    calculateUserStats,
    calculateAllStats,
    mostrarRegistros,
    registrarCambios,
};
