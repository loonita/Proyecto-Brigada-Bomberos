const Joi = require("joi");
const { ROLES } = require("../constans.js");
const nutricionista = Joi.string().min(3).max(30);
const brigadista = Joi.string().min(3).max(30);
const fecha = Joi.date().greater("1-1-1900");
const observaciones = Joi.string().min(3).max(40);
const planAlimenticio = Joi.string().min(3).max(40);
const invalid = Joi.boolean();
const citaNutricionistaBodySchema = Joi.object({
  nutricionista: nutricionista.required(),
  brigadista: brigadista.required(),
  fecha: fecha.required(),
  observaciones: observaciones.required(),
  planAlimenticio: planAlimenticio.required(),
  invalid: invalid,
});
const citaNutricionistaBodyPutSchema = Joi.object({
  nutricionista,
  brigadista,
  fecha,
  observaciones,
  planAlimenticio,
  invalid,
});
module.exports = {
  citaNutricionistaBodySchema,
  citaNutricionistaBodyPutSchema,
  ROLES,
};
// # sourceMappingURL=citas.schema.js.map
