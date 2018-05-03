let mysql = require('mysql');
//db create connection
let db = mysql.createConnection({
    host : 'localhost',
    user : 'phpmyadmin',
    password : '11031997BoGdAn_',
    database : 'mix-boy'
});

//connect to db
db.connect(err => {
    if(err){
        throw err;
    }
    console.log('all is ok');
});