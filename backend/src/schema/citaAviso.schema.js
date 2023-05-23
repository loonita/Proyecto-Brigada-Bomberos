const Joi = require("joi");

const avisoCitaSchema = Joi.object({
    fecha: Joi.date().required(),
    nutricionista: Joi.string().required(),
    preparadorFisico: Joi.string().required(),
    usuario: Joi.string().required(),
});

module.exports = avisoCitaSchema;
