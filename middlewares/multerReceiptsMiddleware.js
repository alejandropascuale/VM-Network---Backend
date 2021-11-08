const path = require('path');


const multer = require('multer');
const storage = multer.diskStorage ({
  destination: (req, file, cb) => {
    cb (null, path.join(__dirname, '../../Frontend/public/images/files/Receipts/'));
  },
  filename: (req, file, cb) => {
    const newFileName = Date.now()+path.extname(file.originalname);
    cb (null, newFileName);
  }
})
const uploadReceipts = multer({ storage });

module.exports = uploadReceipts;