const router = require('express').Router();
const controller = require('../controllers/userController');

router.get('/', controller.getAllUser);
router.get('/:id', controller.getById);
// router.post('/', controller.create);
// router.put('/:id', controller.update);
// router.delete('/:id', controller.delete);

module.exports = router;
