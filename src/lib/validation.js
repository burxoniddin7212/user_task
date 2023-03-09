import Joi from "joi";

export const loginSchema = Joi.object({
  first_name: Joi.string().required(),
  password: Joi.string().required().min(4)
});


export const registerSchema = Joi.object({
  first_name: Joi.string().min(2).max(32).required(),
  last_name: Joi.string().min(2).max(32).required(),
  email: Joi.string().required().email(),
  gander: Joi.valid('male', 'female'),
  password: Joi.string().min(4).max(10).required(),
});

export const editSchema = Joi.object({
  first_name: Joi.string().min(2).max(32).required(),
  last_name: Joi.string().min(2).max(32).required()
});

export const emailSchema = Joi.object({
  email: Joi.string().required().email()
});

export const cheekPasswordSchema = Joi.object({
  email: Joi.string().required().email(),
  code:Joi.string().required()
});

