const express = require('express');
const router = express.Router();


router.use('/auth', require('./authRoutes'));
router.use('/users', require('./userRoutes'));
router.use('/events', require('./eventRoutes'));
router.use('/periods', require('./period.routes'));
//router.use('/comments', require('./comment.routes'));

// commented routes for admin

module.exports = router;