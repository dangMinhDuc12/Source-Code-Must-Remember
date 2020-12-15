const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/coursesController.js');

router.get('/creat', coursesController.creat);
router.post('/store', coursesController.store);
router.get('/:slug', coursesController.show);

module.exports = router;
