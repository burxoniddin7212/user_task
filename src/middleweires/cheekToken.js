import { ForbiddineError } from "../lib/error.js";
import jwt from "../lib/jwt.js";


export const cheekToken = (req, res, next) => {
  try {
    let token = req.headers.token;
    if (!token) return next(new ForbiddineError(403, "required token"));
    token = jwt.verify(token);
    req.user_id = token.user_id;

    next()
  } catch (error) {
    return next(new ForbiddineError("tokenda muammo bor"))
  }
}