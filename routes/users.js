var express = require('express');
var router = express.Router();

const userController = require('../controllers/usersController')

/* POST create user */
router.post('/register', userController.createUser)


module.exports = router;
