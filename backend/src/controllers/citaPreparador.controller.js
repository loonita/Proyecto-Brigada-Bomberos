"use strict"; // significa que el codigo debe interpretarse en modo estricto

const {respondSuccess, respondError} = require("../utils/resHandler"); // se importa la funcion respondSuccess y respondError del archivo resHandler.js
const CitaPreparadorService = require("../services/citaPreparador.service"); // se importa el modelo de datos "CitaPreparador" del archivo citaPreparador.model.js
const { handleError} = require("../utils/errorHandler"); // se importa la funcion handleErrors del archivo errorHandler.js

/**
 * @name getCitaPreparador
 * @description obtiene todas las citas de un preparador fisico
 * @param {*} req {Request}
 * @param {*} res {Response}
 */
async function getCitaPreparador(req, res) {
    try {
        const cita = await CitaPreparadorService.getCitaPreparador();
        cita.length == 0
            ? respondSuccess(res, res, 204)
            : respondSuccess(res, res, 200, cita);
    } catch (error) {
        respondError(res, res, 400, error.message);
    }
}

/**
 * @name getCitaPreparador
 * @description crea un usuario nuevo
 * @param {*} req {Request}
 * @param {*} res {Response}
 */
async function createCitaPreparador(req, res) {
    try {
        const nuevoCitaPreparador =
            await CitaPreparadorService.createCitaPreparador(req.body);
        nuevoCitaPreparador === null
            ? respondError(
                req,
                res,
                400,
                "Error en la validacion de los datos",
                "Bad Request",
                { message: "Verifique los datos ingresados" },
            )
            : respondSuccess(req, res, 201, nuevoCitaPreparador);
    } catch (error) {
<<<<<<< HEAD
        handleErrors(
=======
        handleError(
>>>>>>> main
            error,
            "citaPreparador.controller -> createCitaPreparador",
        );
        respondError(req, res, 500, "No se pudo crear el usuario");
    }
}

/**
 * @name getCitaPreparadorById
 * @description Obtiene un usuario por su id
 * @param req {Request}
 * @param res {Response}
 */
async function getCitaPreparadorById(req, res) {
    try {
      const { id } = req.params;
  
      const cita = await CitaPreparadorService.getCitaPreparadorById(id);
      cita === null
        ? respondError(
            req,
            res,
            404,
            "No se encuentra cita solicitada",
            "Not Found",
            { message: "Verifique el id ingresado" },
          )
        : respondSuccess(req, res, 200, cita);
    } catch (error) {
      handleError(
        error,
        "citaPreparador.controller -> getCitaPreparadorById",
      );
      respondError(req, res, 500, "No se pudo obtener la cita");
    }
  }

/**
 * @name updateCitaPreparador
 * @description Actualiza un usuario por su id
 * @param req {Request}
 * @param res {Response}
 */
async function updateCitaPreparador(req, res) {
    try {
      const { id } = req.params;
      const cita = await CitaPreparadorService.updateCitaPreparador(
        id,
        req.body,
      );
      cita === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro la cita solicitada",
            "Not Found",
            { message: "Verifique el id ingresado" },
          )
        : respondSuccess(req, res, 200, cita);
    } catch (error) {
      handleError(
        error,
        "citaPreparador.controller -> updateCitaPreparador",
      );
      respondError(req, res, 500, "No se pudo actualizar la cita");
    }
  }

/**
 * @name deleteCitaPreparador
 * @description Elimina un usuario por su id
 * @param req {Request}
 * @param res {Response}
 */
async function deleteCitaPreparador(req, res) {
    try {
      const { id } = req.params;
      const cita = await CitaPreparadorService.deleteCitaPreparador(id);
      cita === null
        ? respondError(
            req,
            res,
            404,
            "No se encontro la cita solicitada",
            "Not Found",
            { message: "Verifique el id ingresado" },
          )
        : respondSuccess(req, res, 200, cita);
    } catch (error) {
      handleError(
        error,
        "citaPreparador.controller -> deleteCitaPreparador",
      );
      respondError(req, res, 500, "No se pudo eliminar la cita");
    }
  }
  
  module.exports = {
    getCitaPreparador,
    createCitaPreparador,
    getCitaPreparadorById,
    updateCitaPreparador,
    deleteCitaPreparador,
  };
