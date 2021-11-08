const path = require('path');

const multer = require('multer');
const storage = multer.diskStorage ({
  destination: (req, file, cb) => {
    cb (null, path.join(__dirname, '../../Frontend/public/files/Receipts/'));
  },
  filename: (req, file, cb) => {
    
        cb (null, Date.now()+path.extname(file.originalname));
    
  }
})
const uploadReceipts = multer({ storage });

module.exports = uploadReceipts;