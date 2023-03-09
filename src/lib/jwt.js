import jwt from "jsonwebtoken";
const secret = process.env.JWT_SECRET;

export default {
  sign: (peyload) => jwt.sign(peyload, secret),
  verify: (payload) => jwt.verify(payload, secret)
}