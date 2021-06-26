const express = require('express');
const multer = require('multer');
const bookRouter =  require('./routers/book.router');
const imgUpload = require('./controllers/img.controller');
const PORT = 3000;

const app = express();

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept"
    );
    res.header("Access-Control-Allow-Methods", "GET,PUT,POST,DELETE");
    next();
});

const storageConfig = imgUpload.storage;

app.use(express.static(__dirname));

app.use(multer({storage:storageConfig}).single("filedata"));

app.use(express.json());

app.use('/', bookRouter);


app.listen(PORT, () => console.log(`server started ${PORT}`));