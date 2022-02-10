
const express = require('express');
const router = express.Router();

const {getProductos, getProductbyId, getProductByCategory} = require('../controllers/products');


router.get('/', getProductos);

router.get('/:id', getProductbyId);

router.get('/category/:id', getProductByCategory);

module.exports = router;