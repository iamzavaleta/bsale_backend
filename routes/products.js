
const express = require('express');
const router = express.Router();

const {getProductos, getProductbyId} = require('../controllers/products');


router.get('/', getProductos);

router.get('/:id', getProductbyId);

module.exports = router;