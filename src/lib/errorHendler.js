import fs from "fs";
import path from "path";

export let ErrorHendler = async (error, req, res, next) => {

  if (error.status != 500) {
    return res.status(error.status).send({
      message: error.message
    })
  }

  fs.appendFileSync(path.join(process.cwd(), 'src', 'log.tx'), `${req.url}---${req.ip}-----${Date()}\n`)
  return res.status(error.status).send({
    message: error.name
  })
}