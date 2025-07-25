const Joi = require('joi');

exports.registerValidation = (data) => {
  const schema = Joi.object({
    name: Joi.string().min(3).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(6).required(),
    role: Joi.string().valid('volunteer', 'organizer', 'admin'),
  });
  return schema.validate(data);
};