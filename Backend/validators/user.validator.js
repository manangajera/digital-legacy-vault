import Joi from 'joi';

export const userValidationSchema = Joi.object({
  fullName: Joi.string().min(3).max(100).required(),
  email: Joi.string().email().required(),
  phone: Joi.string()
    .pattern(/^[0-9]{10,15}$/)
    .required(),
  passwordHash: Joi.string().min(6).required(), // Raw password before hashing
});

