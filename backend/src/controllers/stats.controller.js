"use strict";
// Importa el modulo 'express' para crear las rutas
const StatsService = require("../services/stats.service");
const { respondSuccess, respondError } = require("../utils/resHandler");
const { handleError } = require("../utils/errorHandler");
const User = require("../models/user.model");

/**
 * @name getOnlyUser
 * @description Funcion que obtiene las estadisticas de los usuarios
 * @param req {Request}
 * @param res {Response}
*/
async function getOnlyUser(req, res) {
    try {
        const { id } = req.params;
        const stats = await StatsService.calculateUserStats(id);
        stats.length === 0
            ? respondSuccess(req, res, 204)
            : respondSuccess(req, res, 200, stats);
    } catch (error) {
        respondError(req, res, 400, error.message);
    }
}

/**
 * @name getAllUsers
 * @description Funcion que obtiene las estadisticas de los usuarios
 * @param req {Request}
 * @param res {Response}
*/
async function getAllUsers(req, res) {
    try {
        const users = await User.find();
        const stats = await StatsService.calculateAllStats(users);
        stats.length === 0
            ? respondSuccess(req, res, 204)
            : respondSuccess(req, res, 200, stats);
    } catch (error) {
        handleError(error, "stats.controller -> getAllUsers");
        respondError(req, res, 400, error.message);
    }
}

/**
 * @name getRegistro
 * @description Funcion que obtiene el registro de cambios
 * @param req {Request}
 * @param res {Response}
 * @returns {Promise<{}|null>}
*/
async function getRegistro(req, res) {
    try {
        const registro = await StatsService.registroCambio();
        registro.length === 0
            ? respondSuccess(req, res, 204)
            : respondSuccess(req, res, 200, registro);
    } catch (error) {
        handleError(error, "stats.controller -> getRegistro");
        respondError(req, res, 400, error.message);
    }
}

/**
 * @name getRegistro
 * @description Funcion que obtiene el registro de cambios
 * @param req {Request}
 * @param res {Response}
 * @returns {Promise<{}|null>}
*/
async function getHistorico(req, res) {
    try {
        const registro = await StatsService.registroCambio(id);
        registro.length === 0
            ? respondSuccess(req, res, 204)
            : respondSuccess(req, res, 200, registro);
    } catch (error) {
        handleError(error, "stats.controller -> getRegistro");
        respondError(req, res, 400, error.message);
    }
}

module.exports = {
    getOnlyUser,
    getAllUsers,
    getRegistro,
    getHistorico,
};
