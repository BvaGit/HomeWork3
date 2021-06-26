const Router = require('express');
const router = new Router();
const bookController = require('../controllers/book.controller');
const imgUpload = require('../controllers/img.controller');
const uploadImg = require('../middleware/uploadImg');


router.post('/api/upload', uploadImg, bookController.createBook);
router.get('/api/get', bookController.getBook);
router.delete('/api/delete/:id', bookController.deleteBook);



module.exports = router;