import { fatch, fatchAll } from "../../lib/postgres.js"
import query from "./query.js"
import sha256 from "sha256";
import { nodemailer_function } from "../../lib/nodemailer.js";
import redis from "../../lib/redis.js"

let REGISTER = async ({ first_name, last_name, email, gander, password }) => {
  password = await sha256(password);
  let user = await fatch(query.REGISTER, [first_name, last_name, email, gander, password]);
  delete user.password;

  return user
}

let LOGIN = async ({ first_name, password }) => {
  password = await sha256(password);
  let user = await fatch(query.LOGIN, [first_name, password]);

  return user
}

let REGISTERCEEKUNIQUE = async ({ email, password }) => {
  password = await sha256(password);
  let user = await fatch(query.REGISTERCEEKUNIQUE, [email, password]);

  return user
}

let GET = async () => {
  let user = await fatchAll(query.GET);

  return user
}

let GETBYID = async (id) => {
  let user = await fatch(query.GETBYID, [id]);

  return user
}

let EDIT = async ({ first_name, last_name }, id) => {
  let user = await fatch(query.EDIT, [id, first_name, last_name]);
  delete user.password;
  delete user.status;

  return user
}

let DELETE = async (id) => {
  let user = await fatch(query.DELETE, [id]);
  delete user.password;

  return user
}

let RESETPASSWORD = async ({ email }) => {
  let user = await fatch(query.RESETPASSWORDCHEEKEMAIL, [email]);
  if (!user) return user;

  if (user) {
    let random = Math.floor(Math.random() * 9000 + 1000);
    random = String(random);
    redis.set(user.email, random, 'EX', 60);
    nodemailer_function(email, random);
  }

  return user
}

let RESETPASSWORDCEEK = async ({ email, code }) => {
  let code_redis = await redis.get(email);
  if (code_redis == null) return false;
  if (code != code_redis) return false;

  return true
}



export default {
  REGISTER,
  LOGIN,
  REGISTERCEEKUNIQUE,
  GET,
  GETBYID,
  EDIT,
  DELETE,
  RESETPASSWORD,
  RESETPASSWORDCEEK
}