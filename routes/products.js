import express from "express"; 
import controllers from '../controllers/products.js'
import validator from "../middlewares/validator.js";
import schema from '../schemas/products.js'
import passport from "../middlewares/passport.js";
const { create, read, readOne, update } = controllers

let router = express.Router();

router.post('/', validator(schema), passport.authenticate('jwt', { session: false }), create)
router.get('/', read)
router.get('/:id', readOne)
router.put('/:id', passport.authenticate('jwt', { session: false }), update)

export default router