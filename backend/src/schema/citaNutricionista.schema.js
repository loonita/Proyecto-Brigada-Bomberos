const Joi = require("joi");
const { ROLES } = require("../constans.js");
const nutricionista = Joi.string().min(3).max(30);
const brigadista = Joi.string().min(3).max(30);
const fecha = Joi.date().greater("1-1-1900");
const invalid = Joi.boolean();
const citaNutricionistaBodySchema = Joi.object({
  nutricionista: nutricionista.required(),
  brigadista: brigadista.required(),
  fecha: fecha.required(),
  invalid: invalid.required(),
});
const citaNutricionistaBodyPutSchema = Joi.object({
  nutricionista,
  brigadista,
  fecha,
  invalid,
});
module.exports = {
  citaNutricionistaBodySchema,
  citaNutricionistaBodyPutSchema,
  ROLES,
};
// # sourceMappingURL=citas.schema.js.map
