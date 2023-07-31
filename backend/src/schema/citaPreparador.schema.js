const Joi = require("joi");
const { ROLES } = require("../constans.js");
const preparador_fisico = Joi.string().min(3).max(30);
const brigadista = Joi.string().min(3).max(30);
const fecha = Joi.date().greater("1-1-1900");
const nombreEjercicio = Joi.string().min(3).max(30); // Nueva propiedad añadida
const categoriaEjercicio = Joi.string().min(3).max(30);
const enfoqueEjercicio = Joi.string().min(3).max(30);
const seriesEjercicio = Joi.number().integer().positive();
const repeticionesEjercicio = Joi.number().integer().positive();

const citaPreparadorBodySchema = Joi.object({
  preparador_fisico: preparador_fisico.required(),
  brigadista: brigadista.required(),
  fecha: fecha.required(),
  nombreEjercicio: nombreEjercicio.required(), // Nueva propiedad añadida
  categoriaEjercicio: categoriaEjercicio.required(),
  enfoqueEjercicio: enfoqueEjercicio.required(),
  seriesEjercicio: seriesEjercicio.required(),
  repeticionesEjercicio: repeticionesEjercicio.required(),
});
const citaPreparadorBodyPutSchema = Joi.object({
  preparador_fisico,
  brigadista,
  fecha,
  nombreEjercicio,
  categoriaEjercicio,
  enfoqueEjercicio,
  seriesEjercicio,
  repeticionesEjercicio,
});
module.exports = {
  citaPreparadorBodySchema,
  citaPreparadorBodyPutSchema,
  ROLES,
};
// # sourceMappingURL=citas.schema.js.map