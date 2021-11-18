var express = require('express');
var router = express.Router();

const userController = require('../controllers/usersController')

/* POST create user */
 router.get('/receipts/upload', userController.createUser)


module.exports = router;
