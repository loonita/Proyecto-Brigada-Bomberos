"use strict";
// Importa el modelo de datos 'User'
const Role = require("../models/role.model.js");
const CitaPreparador = require("../models/citaPreparador.model.js");
const { handleError } = require("../utils/errorHandler");
const {
  citaPreparadorBodySchema,
} = require("../schema/citaPreparador.schema.js");

/**
 * @typedef CitaPreparador
 * @property {string} _id
 * @property {String} name
 * @property {String} email
 */

/**
 * @name getCitaPreparador
 * @description Obtiene todos las citas
 * @returns {Promise<CitaPreparador[]|[]>}
 */
async function getCitaPreparador() {
  try {
    return await CitaPreparador.find();
  } catch (error) {
    handleError(error, "citaPreparador.service -> getCitaPreparador");
  }
}

/**
 * @name createCitaPreparador
 * @description Crea una nueva cita
 * @param citaPreparador {User} - Objeto con los datos del usuario
 * @returns {Promise<User|null>}
 */
async function createCitaPreparador(citaPreparador) {
  // Esta funcion es similar al singup
  try {
    const { error } = citaPreparadorBodySchema.validate(citaPreparador);
    console.log(error);
    if (error) {
      return null;
    }
    const { preparador_fisico, brigadista, fecha, invalid, nombreEjercicio, categoriaEjercicio, enfoqueEjercicio, seriesEjercicio, repeticionesEjercicio } = citaPreparador;

    const newCitaPreparador = new CitaPreparador({
      preparador_fisico,
      brigadista,
      fecha,
      invalid,
      nombreEjercicio,
      categoriaEjercicio,
      enfoqueEjercicio,
      seriesEjercicio,
      repeticionesEjercicio,
    });
    return await newCitaPreparador.save();
  } catch (error) {
    handleError(error, "citaPreparador.service -> createCitaPreparador");
  }
}

/**
 * @name getCitaPreparadorById
 * @description Obtiene un usuario por su id
 * @param id {string} - Id del usuario
 * @returns {Promise<CitaPreparador|null>}
 */
async function getCitaPreparadorById(id) {
  try {
    return await CitaPreparador.findById({ _id: id });
  } catch (error) {
    handleError(error, "citaPreparador.service -> getCitaPreparadorById");
  }
}

/**
 * @name updateUser
 * @description Actualiza un usuario
 * @param id
 * @param user
 * @returns {Promise<User|null>}
 */
async function updateCitaPreparador(id, user) {
  try {
    const { error } = citaPreparadorBodySchema.validate(user);
    if (error) {
      return null;
    }
    return await CitaPreparador.findByIdAndUpdate(id, user);
  } catch (error) {
    handleError(error, "citaPreparador.service -> updateCitaPreparador");
  }
}

/**
 * @name deleteUser
 * @description Elimina un usuario por su id
 * @param id {string} - Id del usuario
 * @returns {Promise<User|null>}
 */
async function deleteCitaPreparador(id) {
  try {
    return await CitaPreparador.findByIdAndDelete(id);
  } catch (error) {
    handleError(error, "citaPreparador.service -> deleteCitaPreparador");
  }
}

module.exports = {
  getCitaPreparador,
  createCitaPreparador,
  getCitaPreparadorById,
  updateCitaPreparador,
  deleteCitaPreparador,
  Role,
};
