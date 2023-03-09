import { ValidationError } from "../lib/error.js";
import { loginSchema, registerSchema, editSchema, emailSchema,cheekPasswordSchema } from "../lib/validation.js";

export let validation = async (req, res, next) => {
  try {
    if (req.url == "/register") {
      let register = await registerSchema.validate(req.body);
      if (register.error) return next(new ValidationError(register.error.details[0].message))
    }

    if (req.url == "/login") {
      let login = await loginSchema.validate(req.body);
      if (login.error) return next(new ValidationError(login.error.details[0].message))
    }

    if (req.url == "/edit") {
      let edit = await editSchema.validate(req.body);
      if (edit.error) return next(new ValidationError(edit.error.details[0].message))
    }

    if (req.url == "/reset_password") {
      let reset_password = await emailSchema.validate(req.body);
      if (reset_password.error) return next(new ValidationError(reset_password.error.details[0].message))
    }

    if (req.url == "/reset_password_cheek") {
      let reset_password = await cheekPasswordSchema.validate(req.body);
      if (reset_password.error) return next(new ValidationError(reset_password.error.details[0].message))
    }

    next();
  } catch (error) {
    return next(new ValidationError(error.message))
  }
}