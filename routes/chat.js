const express = require('express');
const kalleController = require('../controllers/Kalle');
const madisController = require('../controllers/Madis');
const lauraController = require('../controllers/Laura');

const router = express.Router();

router.get('/recieve/Kalle', kalleController.getMessage);
router.get('/recieve/Laura', lauraController.getMessage);
router.get('/recieve/Madis', madisController.getMessage);

router.post('/send/Kalle', kalleController.postMessage);
router.post('/send/Laura', lauraController.postMessage);
router.post('/send/Madis', madisController.postMessage);

module.exports = router;