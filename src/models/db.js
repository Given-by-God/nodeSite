let mysql = require('mysql');

//db create connection

let connection = mysql.createConnection({
    host : 'localhost',
    user : 'phpmyadmin',
    password : '11031997BoGdAn_',
    database : 'mix-boy'
});

//connect to db
// connection.connect(err => {
//     if(err) throw err;
//     console.log('test');
// });


module.exports = connection;