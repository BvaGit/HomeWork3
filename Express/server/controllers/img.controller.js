const multer = require('multer');


class ImgUploads {

    storage = multer.diskStorage({
        destination: (req, file, cb) => {
             cb(null, "imgBook");
        },
        filename: (req, file, cb) => {
            cb(null, file.originalname);
        }
    })

    // fileFilter (req, file, cb) {
    //     if(file.mimetype === "image/jpg" || file.mimetype === "image/jpeg"){
    //         cb(null, true);
    //     } else {
    //         cb(null, false);
    //     }
    // }


}

module.exports = new ImgUploads();





