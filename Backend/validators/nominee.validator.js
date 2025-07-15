// validators/nominee.validator.js
import Joi from 'joi';

export const nomineeValidationSchema = Joi.object({
  name: Joi.string().min(3).max(50).required().messages({
    'string.empty': 'Nominee name is required',
    'string.min': 'Nominee name must be at least 3 characters',
    'string.max': 'Nominee name must not exceed 50 characters',
  }),
  email: Joi.string().email().required().messages({
    'string.empty': 'Nominee email is required',
    'string.email': 'Enter a valid email address',
  }),
  phone: Joi.string()
    .pattern(/^[6-9]\d{9}$/)
    .required()
    .messages({
      'string.empty': 'Phone number is required',
      'string.pattern.base': 'Enter a valid 10-digit Indian phone number',
    }),
  nomineeId: Joi.string().optional(), // optional if nominee is a registered user
});
