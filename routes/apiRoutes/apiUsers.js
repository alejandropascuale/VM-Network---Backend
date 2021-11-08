var express = require('express');
var router = express.Router();

const userApiController = require('../../controllers/apiControllers/usersApiControllers');
const uploadAvatar = require('../../../Server/middlewares/multer-avatar-Middleware');
const uploadReceipts = require('../../../Server/middlewares/multerReceiptsMiddleware');

// List all users
router.get('/', userApiController.listUsers);
// Create user
router.post('/register', userApiController.createUser);
// Login user
router.post('/Login', userApiController.loginUser);
// logout user
router.get('/logout', userApiController.logoutUser);
// Edit user
router.put('/edit/:iduser', uploadAvatar.single('profile-picture'), userApiController.updateUser);
// get all receipts from user
router.get('/receipts/:idEmployee', userApiController.receiptsUser);
// get all receipts uploaded
router.get('/receipts', userApiController.listReceipts);
// upload receipts
router.post('/receipts/upload', uploadReceipts.single('receipts'),userApiController.uploadReceipts);

module.exports = router;