const mysql = require('mysql')
const db = mysql.createPool({
    localhost : '127.0.0.1',
    user : 'liu2',
    password : '123456',
    database : 'liu2',
})
module.exports = db;