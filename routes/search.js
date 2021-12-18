const express = require('express');
const router = express.Router();

const {getSearch} = require('../controllers/search');

router.get('/:id', getSearch);

module.exports = router;