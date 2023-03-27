import express from "express"; 
import controllers from '../controllers/user.js'
import passport from "../middlewares/passport.js";
import accountExist from "../middlewares/accountExist.js";
const { create, sign_in } = controllers

let router = express.Router();

router.post('/signup',accountExist, create)
router.post('/signin', sign_in);

export default router