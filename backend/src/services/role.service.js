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

module.exports = {
  getRoles,
};
