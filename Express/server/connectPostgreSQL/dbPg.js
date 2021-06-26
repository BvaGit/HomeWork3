const Pool = require('pg').Pool;
const postgreSQL = new Pool({
    user: "postgres",
    password: "1111",
    host: "localhost",
    port: 5432,
    database: "books"
});


module.exports = postgreSQL;