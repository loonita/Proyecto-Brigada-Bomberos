"use strict";
// Importa el modelo de datos 'User'
const User = require("../models/user.model.js");
const Role = require("../models/role.model.js");
const { handleError } = require("../utils/errorHandler");
const { userBodySchema } = require("../schema/user.schema");
const cambios = require("../services/stats.service.js");

/**
 * @typedef User
 * @property {string} _id
 * @property {String} name
 * @property {String} email
*/

/**
 * @name getUsers
 * @description Obtiene todos los usuarios
 * @returns {Promise<User[]|[]>}
 */
async function getUsers() {
  try {
    return await User.find();
  } catch (error) {
    handleError(error, "user.service -> getUsers");
  }
}

/**
 * @name createUser
 * @description Crea un nuevo usuario
 * @param user {User} - Objeto con los datos del usuario
 * @returns {Promise<User|null>}
 */
async function createUser(user) {
  // Esta funcion es similar al singup
  try {
    const { error } = userBodySchema.validate(user);
    if (error) return null;
    const {
      name,
      email,
      roles,
      peso,
      altura,
      fechaNacimiento,
      genero,
      telefono,
      rut,
      domicilio,
      imc,
    } = user;
    const userFound = await User.findOne({ email: user.email });
    if (userFound) return null;

    // si un rol no es un id valido, retorna null
    for (let i = 0; i < roles.length; i++) {
      if (!roles[i].match(/^[0-9a-fA-F]{24}$/)) {
        return null;
      }
    }

    // si un rol no existe, retorna null
    const myRoles = [];
    for (let i = 0; i < roles.length; i++) {
      const rolesFound = await Role.findById(roles[i]);
      if (!rolesFound) return null;

      myRoles.push(rolesFound._id);
    }

    const newUser = new User({
      name,
      email,
      roles: myRoles,
      peso,
      altura,
      fechaNacimiento,
      genero,
      telefono,
      rut,
      domicilio,
      imc,
    });
    return await newUser.save();
  } catch (error) {
    handleError(error, "user.service -> createUser");
  }
}

/**
 * @name getUserById
 * @description Obtiene un usuario por su id
 * @param id {string} - Id del usuario
 * @returns {Promise<User|null>}
 */
async function getUserById(id) {
  try {
    return await User.findById({ _id: id });
  } catch (error) {
    handleError(error, "user.service -> getUserById");
  }
}

/**
 * @name updateUser
 * @description Actualiza un usuario
 * @param id
 * @param user
 * @returns {Promise<User|null>}
 */
async function updateUser(id, user) {
  try {
    const { error } = userBodySchema.validate(user);
    console.log(user);
    user.imc = user.peso / (user.altura * user.altura);
    if (error) {
      return null;
    }
    /*cambios.registrarCambios(id, user);*/
    return await User.findByIdAndUpdate(id, user);
  } catch (error) {
    handleError(error, "user.service -> updateUser");
  }
}

/**
 * @name deleteUser
 * @description Elimina un usuario por su id
 * @param id {string} - Id del usuario
 * @returns {Promise<User|null>}
 */
async function deleteUser(id) {
  try {
    return await User.findByIdAndDelete(id);
  } catch (error) {
    handleError(error, "user.service -> deleteUser");
  }
}

module.exports = {
  getUsers,
  createUser,
  getUserById,
  updateUser,
  deleteUser,
};
