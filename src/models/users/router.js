import { Router } from 'express';
import controller from "./controller.js"
import { validation } from '../../middleweires/validation_middleweire.js';
import { cheekToken } from "../../middleweires/cheekToken.js";

let router = Router();

router.post('/register', [validation], controller.REGISTER);
router.post('/login', [validation], controller.LOGIN);
router.get('/users', controller.GET);
router.get('/users/:id', controller.GETBYID);
router.put('/users', [cheekToken, validation], controller.EDIT);
router.delete('/users', [cheekToken], controller.DELETE);
router.post('/reset_password', [validation], controller.RESETPASSWORD);
router.post('/reset_password_cheek', [validation], controller.RESETPASSWORDCEEK);


export default router;

