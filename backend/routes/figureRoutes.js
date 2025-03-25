// src/routes/figureRoutes.js
const express = require('express');
const router = express.Router();
const figureController = require('../controllers/figureController');

router.get('/figures/:id', figureController.getFigure);
router.post('/figures', figureController.createFigure);

module.exports = router;
