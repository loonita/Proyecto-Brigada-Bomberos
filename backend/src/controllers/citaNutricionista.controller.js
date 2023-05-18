"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const CitaNutricionistaService = require("../services/citaNutricionista.service");
const { handleError } = require("../utils/errorHandler");

/**
 * @name getCitaNutricioniosta
 * @description Obtiene todos los usuarios
 * @param req {Request}
 * @param res {Response}
 */
async function getCitaNutricionista(req, res) {
  try {
    const cita = await CitaNutricionistaService.getCitaNutricionista();
    cita.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, usuarios);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}

/**
 * @name createCitaNutricionista
 * @description Crea un nuevo usuario
 * @param req {Request}
 * @param res {Response}
 */
async function createCitaNutricionista(req, res) {
  try {
    const nuevoCitaNutricionista =
      await CitaNutricionistaService.createCitaNutricionista(req.body);
    nuevoCitaNutricionista === null
      ? respondError(
          req,
          res,
          400,
          "Error en la validacion de datos",
          "Bad Request",
          { message: "Verifique los datos ingresados" },
        )
      : respondSuccess(req, res, 201, nuevoCitaNutricionista);
  } catch (error) {
    handleError(
      error,
      "citaNutricionista.controller -> createCitaNutricionista",
    );
    respondError(req, res, 500, "No se pudo crear el usuario");
  }
}

/**
 * @name getCitaNutricionistaById
 * @description Obtiene un usuario por su id
 * @param req {Request}
 * @param res {Response}
 */
async function getCitaNutricionistaById(req, res) {
  try {
    const { id } = req.params;

    const cita = await CitaNutricionistaService.getCitaNutricionistaById(id);
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
      "citaNutricionista.controller -> getCitaNutricionistaById",
    );
    respondError(req, res, 500, "No se pudo obtener la cita");
  }
}

/**
 * @name updateCitaNutricionista
 * @description Actualiza un usuario por su id
 * @param req {Request}
 * @param res {Response}
 */
async function updateCitaNutricionista(req, res) {
  try {
    const { id } = req.params;
    const cita = await CitaNutricionistaService.updateCitaNutricionista(
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
      "citaNutricionista.controller -> updateCitaNutricionista",
    );
    respondError(req, res, 500, "No se pudo actualizar el usuario");
  }
}

/**
 * @name deleteCitaNutricionista
 * @description Elimina un usuario por su id
 * @param req {Request}
 * @param res {Response}
 */
async function deleteCitaNutricionista(req, res) {
  try {
    const { id } = req.params;
    const cita = await citaNutricionistaService.deleteCitaNutricionista(id);
    cita === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro la cita solicitada",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, user);
  } catch (error) {
    handleError(
      error,
      "citaNutricionista.controller -> deleteCitaNutricionista",
    );
    respondError(req, res, 500, "No se pudo eliminar la cita");
  }
}

module.exports = {
  getCitaNutricionista,
  createCitaNutricionista,
  getCitaNutricionistaById,
  updateCitaNutricionista,
  deleteCitaNutricionista,
};
