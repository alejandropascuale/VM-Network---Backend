var express = require('express');
var router = express.Router();

const userApiController = require('../../controllers/apiControllers/usersApiControllers');

// List all users
router.get('/', userApiController.listUsers);
// Create user
router.post('/register', userApiController.createUser);

module.exports = router;