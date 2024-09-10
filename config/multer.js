import multer from 'multer';
import path from 'path';

// Configure multer storage
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "../social-media/public/upload");
    },
    filename: function (req, file, cb) {
      cb(null, Date.now() + file.originalname);
    },
  });

  

const upload = multer({ storage: storage });

export default upload;
