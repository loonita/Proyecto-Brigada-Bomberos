"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const RolesService = require("../services/role.service");
const { handleError } = require("../utils/errorHandler");

async function getRoles(req, res) {
  try {
    const roles = await RolesService.getRoles();
    roles.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, roles);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}
module.exports = { getRoles };
