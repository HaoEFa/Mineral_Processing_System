const mysql = require("mysql")
const db =  mysql.createPool({
    user : "root",
    host : "127.0.0.1",
    password : 'password',
    database : 'my_db_01'
})

db.query('SELECT 1' , (err, results) => {
    if(err) return console.log(err.message);
    console.log(results);
})
module.exports = db;

