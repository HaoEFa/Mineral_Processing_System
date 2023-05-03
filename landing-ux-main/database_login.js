const mysql = require('mysql')
const db = mysql.createPool({
    localhost : '127.0.0.1',
    user : 'root',
    password : 'password',
    database : 'mineral',
})
module.exports = db;
