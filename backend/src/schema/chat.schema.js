const Joi = require("joi");

const sender = Joi.string().min(3).max(30).required();
const recipient = Joi.string().min(3).max(30).required();
const message = Joi.string().required();
const createdAt = Joi.date().greater("1-1-1900").required();
const read = Joi.boolean();

const chatSchema = Joi.object({
    sender,
    recipient,
    message,
    createdAt,
    read,
});

module.exports = {
    chatSchema,
};

