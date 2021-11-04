var express = require('express');
var router = express.Router();

const userApiController = require('../../controllers/apiControllers/usersApiControllers');

// List all users
router.get('/', userApiController.listUsers);
// Create user
router.post('/register', userApiController.createUser);
// Login user
router.post('/Login', userApiController.loginUser);
// Edit user
router.put('/edit/:iduser', userApiController.loginUser);
// get all receipts from user
router.get('/receipts/:iduser', userApiController.receiptsUser);

module.exports = router;