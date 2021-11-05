var express = require('express');
var router = express.Router();

const userApiController = require('../../controllers/apiControllers/usersApiControllers');
const uploadFile = require('../../../Server/middlewares/multer-avatar-Middleware');

// List all users
router.get('/', userApiController.listUsers);
// Create user
router.post('/register', userApiController.createUser);
// Login user
router.post('/Login', userApiController.loginUser);
// logout user
router.get('/logout', userApiController.logoutUser);
// Edit user
router.put('/edit/:iduser', uploadFile.single('profile-picture'), userApiController.updateUser);
// get all receipts from user
router.get('/receipts/:idEmployee', userApiController.receiptsUser);

module.exports = router;