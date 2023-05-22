const Joi = require("joi");
const { ROLES } = require("../constans.js");
const prepadador_fisico = Joi.string().min(3).max(30);
const brigadista = Joi.string().min(3).max(30);
const fecha = Joi.date().greater("1-1-1900");
const invalid = Joi.boolean();
const citaPreparadorBodySchema = Joi.object({
  prepadador_fisico: prepadador_fisico.required(),
  brigadista: brigadista.required(),
  fecha: fecha.required(),
  invalid: invalid,
});
const citaPreparadorBodyPutSchema = Joi.object({
  prepadador_fisico,
  brigadista,
  fecha,
  invalid,
});
module.exports = {
  citaPreparadorBodySchema,
  citaPreparadorBodyPutSchema,
  ROLES,
};
// # sourceMappingURL=citas.schema.js.map