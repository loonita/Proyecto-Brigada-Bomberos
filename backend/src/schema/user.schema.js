const Joi = require("joi");
const { ROLES } = require("../constans.js");
const name = Joi.string().min(3).max(30);
const email = Joi.string().email();
const roles = Joi.array();
const peso = Joi.number().min(0);
const altura = Joi.number().min(0);
const fechaNacimiento = Joi.date().greater("1-1-1900");
const genero = Joi.string().valid("Hombre", "Mujer");
const telefono = Joi.string().min(9).max(9);
const rut = Joi.string().min(7).max(9);
const domicilio = Joi.string().min(3).max(40);
const imc = Joi.number().min(0);
// trabajo de noche
const nombreEjercicio = Joi.string().min(3).max(30);
const categoriaEjercicio = Joi.string().min(3).max(30);
const enfoqueEjercicio = Joi.string().min(3).max(150);
const seriesEjercicio = Joi.number().min(1);
const repeticionesEjercicio = Joi.number().min(1);

const userBodySchema = Joi.object({
  name: name.required(),
  email: email.required(),
  roles: roles.required(),
  peso: peso.required(),
  altura: altura.required(),
  fechaNacimiento: fechaNacimiento.required(),
  genero: genero.required(),
  telefono: telefono.required(),
  rut: rut.required(),
  domicilio: domicilio.required(),
  imc: imc.required(),
  // trabajo de noche
  nombreEjercicio: nombreEjercicio.required(),
  categoriaEjercicio: categoriaEjercicio.required(),
  enfoqueEjercicio: enfoqueEjercicio.required(),
  seriesEjercicio: seriesEjercicio.required(),
  repeticionesEjercicio: repeticionesEjercicio.required(),
});

const userBodyPutSchema = Joi.object({
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
  // trabajo de noche
  nombreEjercicio,
  categoriaEjercicio,
  enfoqueEjercicio,
  seriesEjercicio,
  repeticionesEjercicio,
});

module.exports = { userBodySchema, userBodyPutSchema };
