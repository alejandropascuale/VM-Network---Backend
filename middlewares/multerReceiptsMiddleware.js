const path = require('path');


const multer = require('multer');
const storage = multer.diskStorage ({
  destination: (req, file, cb) => {
    cb (null, path.join(__dirname, '../../Frontend/public/images/files/R¿eceipts/'));
  },
  filename: (req, file, cb) => {
    const newFileName = Date.now()+path.extname(file.originalname);
    cb (null, newFileName);
  }
})
const uploadFile = multer({ storage });

module.exports = uploadFile;