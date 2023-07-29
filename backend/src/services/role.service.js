"use strict";

const Role = require("../models/role.model.js");
const { handleError } = require("../utils/errorHandler");

async function getRoles() {
  try {
    return await Role.find();
  } catch (error) {
    handleError(error, "roles.service -> getRoles");
  }
}

/**
 * @name getRoleById
 * @description Obtiene un role por su id
 * @param id {string} - Id del role
 * @returns {Promise<Role|null>}
 */
async function getRoleById(id) {
  try {
    return await Role.findById({ _id: id });
  } catch (error) {
    handleError(error, "role.service -> getRoleById");
  }
}

module.exports = {
  getRoles,
  getRoleById,
};
