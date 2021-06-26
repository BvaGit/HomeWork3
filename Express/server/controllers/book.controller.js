const dbPg = require('../connectPostgreSQL/dbPg');
const imgUploads = require('../controllers/img.controller');
const url = 'http://localhost:3000/imgBook/';

class BookController{

    async createBook(req, res){

        const { title, descr } = req.body;
        console.log("title", title, "descript", descr, req.file.originalname);
        try{
            const newBook = await dbPg.query(`INSERT INTO book (title, img, descript, dateauth) VALUES ('${title}','${url+req.file.originalname}', '${descr}', '2021-07-07')`);
            res.status(200);
        } catch(e) {
           console.log(e)
        }

    }

    async getBook(req, res){
        try{
            const getBook = await dbPg.query(`SELECT * FROM book`);
            res.json(getBook.rows);
        } catch {
            console.log('no');
        }
    }

    async updateBook(req, res){

    }

    async deleteBook(req, res){
        const id = req.params.id;
        try{
            const deleteBook = await dbPg.query(`DELETE FROM book WHERE id=${id}`);
            res.status(200).json('Delete ok');
        } catch(e) {
            console.log(e);
        }
    }


}

module.exports = new BookController();