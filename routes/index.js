import express from 'express'
import products from './products.js'
import user from './user.js'

let router = express.Router();
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/products', products)
router.use('/auth', user)

export default router