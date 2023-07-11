// Autorizacion - Comprobar el rol del usuario
const User = require("../models/user.model.js");
const Role = require("../models/role.model.js");
const { respondError } = require("../utils/resHandler");
const { handleError } = require("../utils/errorHandler");

async function isAdmin(req, res, next) {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      if (roles[i].name === "admin") {
        next();
        return;
      }
    }
    return respondError(req, res, 401, "Require Admin Role!");
  } catch (error) {
    handleError(error, "autho.middleware -> isAdmin");
  }
}

async function isNutricionista(req, res, next) {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      console.log(roles[i].name);
      if (roles[i].name === "nutricionista" || roles[i].name === "admin") {
        next();
        return;
      }
    }
    return respondError(req, res, 401, "Require nutricionista!");
  } catch (error) {
    handleError(error, "autho.middleware -> isNutricionista");
  }
}
async function isBrigadista(req, res, next) {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      console.log(roles[i].name);
      if (roles[i].name === "bringadista" || roles[i].name === "admin") {
        next();
        return;
      }
    }
    return respondError(req, res, 401, "Require bringadista!");
  } catch (error) {
    handleError(error, "autho.middleware -> isBringadista");
  }
}
async function isPreparador(req, res, next) {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      console.log(roles[i].name);
      if (roles[i].name === "preparador_fisico" || roles[i].name === "admin") {
        next();
        return;
      }
    }
    return respondError(req, res, 401, "Require preparador_fisico!");
  } catch (error) {
    handleError(error, "autho.middleware -> isPreparador");
  }
}

async function isPoB(req, res, next) {
  try {
    const user = await User.findById(req.userId);
    const roles = await Role.find({ _id: { $in: user.roles } });
    for (let i = 0; i < roles.length; i++) {
      console.log(roles[i].name);
      if (roles[i].name === "preparador_fisico" || roles[i].name === "brigadista" || roles[i].name === "nutricionista") {
        next();
        return;
      }
    }
    return respondError(req, res, 401, "Require preparador fisico o brigadista!");
  } catch (error) {
    handleError(error, "autho.middleware -> isPoB");
  }
}


module.exports = {
  isAdmin,
  isNutricionista,
  isBrigadista,
  isPreparador,
  isPoB,
};
