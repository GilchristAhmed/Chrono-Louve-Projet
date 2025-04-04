// src/routes/eventRoutes.js
const express = require('express');
const router = express.Router();
const eventController = require('../controllers/eventController');

router.get('/events/:id', eventController.getEventById);
router.post('/events', eventController.createEvent);

module.exports = router;
