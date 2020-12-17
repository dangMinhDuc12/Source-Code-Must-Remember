const express = require('express');
const router = express.Router();

const coursesController = require('../app/controllers/coursesController.js');

router.get('/:id/edit', coursesController.edit);
router.put('/:id/restore', coursesController.restore);
router.delete('/:id/forceDelete', coursesController.forceDelete);
router.post('/handle-form-actions', coursesController.handleFormAction);
router.get('/creat', coursesController.creat);
router.post('/store', coursesController.store);
router.put('/:id', coursesController.update);
router.delete('/:id', coursesController.delete);
router.get('/:slug', coursesController.show);

module.exports = router;
