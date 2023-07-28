"use strict";

const { respondSuccess, respondError } = require("../utils/resHandler");
const UserService = require("../services/user.service");
const { handleError } = require("../utils/errorHandler");
const RoleService = require("../services/role.service");

/**
 * @name getUsers
 * @description Obtiene todos los usuarios
 * @param req {Request}
 * @param res {Response}
 */
async function getUsers(req, res) {
  try {
    const usuarios = await UserService.getUsers();
    usuarios.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, usuarios);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}

/**
 * @name getBrigadistas
 * @description Obtiene todos los brigadistas
 * @param req {Request}
 * @param res {Response}
 */
async function getBrigadistas(req, res) {
  try {
    const usuarios = await UserService.getUsers();
    const brigadistas = [];
    let count = 0;
    for (let i = 0; i < usuarios.length; i++) {
      const usuario = usuarios[i];
      for (let j = 0; j < usuario.roles.length; j++) {
        const role = await RoleService.getRoleById(usuario.roles[j]);
        if (role.name === "brigadista") {
          brigadistas[count] = usuario;
          count++;
        }
      }
    }
    brigadistas.length === 0
      ? respondSuccess(req, res, 204)
      : respondSuccess(req, res, 200, brigadistas);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}
/**
 * @name createUser
 * @description Crea un nuevo usuario
 * @param req {Request}
 * @param res {Response}
 */
async function createUser(req, res) {
  try {
    const nuevoUser = await UserService.createUser(req.body);
    nuevoUser === null
      ? respondError(
          req,
          res,
          400,
          "Error en la validacion de datos",
          "Bad Request",
          { message: "Verifique los datos ingresados" },
        )
      : respondSuccess(req, res, 201, nuevoUser);
  } catch (error) {
    handleError(error, "user.controller -> createUser");
    respondError(req, res, 500, "No se pudo crear el usuario");
  }
}

/**
 * @name getUsersCSV
 * @description Obtiene todos los usuarios en formato CSV
 * @param req {Request}
 * @param res {Response}
 */
async function getUsersCSV(req, res) {
  try {
    const users = await UserService.getUsers();

    let csvData =
      [
        "Nombre",
        "RUT",
        "Email",
        "Domicilio",
        "Telefono",
        "Fecha Nacimineto",
        "Genero",
        "Peso",
        "Altura",
        "IMC",
      ].join(",") + "\r\n";
    users.forEach((user) => {
      csvData +=
        [
          user.name,
          user.rut,
          user.email,
          user.domicilio,
          user.telefono,
          user.fechaNacimiento,
          user.genero,
          user.peso,
          user.altura,
          user.imc,
        ].join(",") + "\r\n";
    });

    res
      .set({
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="users.csv"`,
      })
      .send(csvData);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}

/**
 * @name getUserById
 * @description Obtiene un usuario por su id
 * @param req {Request}
 * @param res {Response}
 */
async function getUserById(req, res) {
  try {
    const { id } = req.params;

    const user = await UserService.getUserById(id);
    user === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el usuario solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, user);
  } catch (error) {
    handleError(error, "user.controller -> getUserById");
    respondError(req, res, 500, "No se pudo obtener el usuario");
  }
}

/**
 * @name getUserByIdCSV
 * @description Obtiene todos los usuarios en formato CSV
 * @param req {Request}
 * @param res {Response}
 */
async function getUserByIdCSV(req, res) {
  try {
    const { id } = req.params;
    const user = await UserService.getUserById(id);

    let csvData =
      [
        "Nombre",
        "RUT",
        "Email",
        "Domicilio",
        "Telefono",
        "Fecha Nacimineto",
        "Genero",
        "Peso",
        "Altura",
        "IMC",
      ].join(",") + "\r\n";
    csvData +=
      [
        user.name,
        user.rut,
        user.email,
        user.domicilio,
        user.telefono,
        user.fechaNacimiento,
        user.genero,
        user.peso,
        user.altura,
        user.imc,
      ].join(",") + "\r\n";

    res
      .set({
        "Content-Type": "text/csv",
        "Content-Disposition": `attachment; filename="users.csv"`,
      })
      .send(csvData);
  } catch (error) {
    respondError(req, res, 400, error.message);
  }
}

/**
 * @name updateUser
 * @description Actualiza un usuario por su id
 * @param req {Request}
 * @param res {Response}
 */
async function updateUser(req, res) {
  try {
    const { id } = req.params;
    const user = await UserService.updateUser(id, req.body);
    user === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el usuario solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, user);
  } catch (error) {
    handleError(error, "user.controller -> updateUser");
    respondError(req, res, 500, "No se pudo actualizar el usuario");
  }
}

/**
 * @name deleteUser
 * @description Elimina un usuario por su id
 * @param req {Request}
 * @param res {Response}
 */
async function deleteUser(req, res) {
  try {
    const { id } = req.params;
    const user = await UserService.deleteUser(id);
    user === null
      ? respondError(
          req,
          res,
          404,
          "No se encontro el usuario solicitado",
          "Not Found",
          { message: "Verifique el id ingresado" },
        )
      : respondSuccess(req, res, 200, user);
  } catch (error) {
    handleError(error, "user.controller -> deleteUser");
    respondError(req, res, 500, "No se pudo eliminar el usuario");
  }
}

module.exports = {
  getUsers,
  getUsersCSV,
  getBrigadistas,
  createUser,
  getUserById,
  getUserByIdCSV,
  updateUser,
  deleteUser,
};
