const multer = require('multer');
const path = require('path');

// Multer storage configuration
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // Set the destination folder where uploaded files will be stored
    cb(null, path.join(__dirname, '..', 'public', 'uploads'))
  },
  filename: function (req, file, cb) {
    // Set the filename for the uploaded file
    cb(null, Date.now() + '-' + file.originalname);
  }
});

// Middleware function to handle file uploads
const upload = multer({ storage: storage }).single('file');

// Middleware function to be used in your routes
function uploadFile(req, res, next) {
  upload(req, res, function (err) {
    console.log(req.body)
    if (err instanceof multer.MulterError) {
      // A Multer error occurred when uploading
      return res.status(500).json({ error: 'Multer error occurred', message: err.message });
    } else if (err) {
      // An unknown error occurred when uploading
      return res.status(500).json({ error: 'Unknown error occurred', message: err.message });
    }

    // File uploaded successfully
    next();
  });
}

module.exports = uploadFile;
