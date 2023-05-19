"use strict";
// Importa el modelo de datos 'User'
const Role = require("../models/role.model.js");
const CitaNutricionista = require("../models/citaNutricionista.model.js");
const { handleError } = require("../utils/errorHandler");
const {
  citaNutricionistaBodySchema,
} = require("../schema/citaNutricionista.schema.js");

/**
 * @typedef CitaNutricionista
 * @property {string} _id
 * @property {String} name
 * @property {String} email
 */

/**
 * @name getCitaNutricionista
 * @description Obtiene todos las citas
 * @returns {Promise<CitaNutricionista[]|[]>}
 */
async function getCitaNutricionista() {
  try {
    return await CitaNutricionista.find();
  } catch (error) {
    handleError(error, "citaNutricionista.service -> getCitaNutricionista");
  }
}

/**
 * @name createCitaNutricionista
 * @description Crea una nueva cita
 * @param citaNutricionista {User} - Objeto con los datos del usuario
 * @returns {Promise<User|null>}
 */
async function createCitaNutricionista(citaNutricionista) {
  // Esta funcion es similar al singup
  try {
    const { error } = citaNutricionistaBodySchema.validate(citaNutricionista);
    if (error) return null;
    const { nutricionista, brigadista, fecha, invalid } = citaNutricionista;

    const newCitaNutricionista = new CitaNutricionista({
      nutricionista,
      brigadista,
      fecha,
      invalid,
    });
    return await newCitaNutricionista.save();
  } catch (error) {
    handleError(error, "citaNutricionista.service -> createCitaNutricionista");
  }
}

/**
 * @name getCitaNutricionistaById
 * @description Obtiene un usuario por su id
 * @param id {string} - Id del usuario
 * @returns {Promise<CitaNutricionista|null>}
 */
async function getCitaNutricionistaById(id) {
  try {
    return await CitaNutricionista.findById({ _id: id });
  } catch (error) {
    handleError(error, "citaNutricionista.service -> getCitaNutricionistaById");
  }
}

/**
 * @name updateUser
 * @description Actualiza un usuario
 * @param id
 * @param user
 * @returns {Promise<User|null>}
 */
async function updateCitaNutricionista(id, user) {
  try {
    const { error } = citaNutricionistaBodySchema.validate(user);
    if (error) {
      return null;
    }
    return await CitaNutricionista.findByIdAndUpdate(id, user);
  } catch (error) {
    handleError(error, "citaNutricionista.service -> updateCitaNutricionista");
  }
}

/**
 * @name deleteUser
 * @description Elimina un usuario por su id
 * @param id {string} - Id del usuario
 * @returns {Promise<User|null>}
 */
async function deleteCitaNutricionista(id) {
  try {
    return await CitaNutricionista.findByIdAndDelete(id);
  } catch (error) {
    handleError(error, "citaNutricionista.service -> deleteCitaNutricionista");
  }
}

module.exports = {
  getCitaNutricionista,
  createCitaNutricionista,
  getCitaNutricionistaById,
  updateCitaNutricionista,
  deleteCitaNutricionista,
  Role,
};
