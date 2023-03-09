import modul from "./modul.js"
import jwt from "../../lib/jwt.js"
import { AuthorizatsionError, BedRequest, InternalServerError, ValidationError } from "../../lib/error.js";


let REGISTER = async (req, res, next) => {
  try {
    let userCHeek = await modul.REGISTERCEEKUNIQUE(req.body);
    if (userCHeek) return next(new ValidationError("email or password unique"));
    let user = await modul.REGISTER(req.body);
    if (!user) return next(new BedRequest("bed request"));
    return res.status(201).send({
      message: 'ok',
      data: user,
      token: jwt.sign({ user_id: user.user_id })
    })
  } catch (error) {
    next(new InternalServerError());
  }
}

let LOGIN = async (req, res, next) => {
  try {
    let user = await modul.LOGIN(req.body);
    if (!user) return next(new AuthorizatsionError("not found"));

    return res.status(200).send({
      message: 'ok',
      data: user,
      token: jwt.sign({ user_id: user.user_id })
    })
  } catch (error) {
    next(new InternalServerError());
  }
}


let GET = async (req, res, next) => {
  try {
    let users = await modul.GET();

    return res.status(200).send({
      message: 'ok',
      data: users
    })
  } catch (error) {
    next(new InternalServerError());
  }
}

let GETBYID = async (req, res, next) => {
  try {
    if(!req.params.id) return next(new BedRequest("id is required"));
    let user = await modul.GETBYID(req.params.id);

    return res.status(200).send({
      message: 'ok',
      data: user
    })
  } catch (error) {
    next(new InternalServerError());
  }
}

let EDIT = async (req, res, next) => {
  try {

    let user = await modul.EDIT(req.body, req.user_id);
    if (!user) return next(new BedRequest("bed request"));

    return res.status(200).send({
      message: 'updated',
      data: user
    })
  } catch (error) {
    next(new InternalServerError());
  }
}


let DELETE = async (req, res, next) => {
  try {

    let user = await modul.DELETE(req.user_id);
    if (!user) return next(new BedRequest("bed request"));

    return res.status(200).send({
      message: 'deleted',
      data: user
    })
  } catch (error) {
    next(new InternalServerError());
  }
}

let RESETPASSWORD = async (req, res, next) => {
  try {
    let data = await modul.RESETPASSWORD(req.body);
    if (!data) return next(new BedRequest("not found email"));

    return res.status(200).send({
      message: 'ok'
    })
  } catch (error) {
    next(new InternalServerError());
  }
}

let RESETPASSWORDCEEK = async (req, res, next) => {
  try {
    let data = await modul.RESETPASSWORDCEEK(req.body);
    if (data == false) return next(new BedRequest("invalid code or expired"));

    return res.status(200).send({
      message: 'ok'
    })
  } catch (error) {
    next(new InternalServerError());
  }
}


export default {
  REGISTER,
  LOGIN,
  GET,
  GETBYID,
  EDIT,
  DELETE,
  RESETPASSWORD,
  RESETPASSWORDCEEK
}