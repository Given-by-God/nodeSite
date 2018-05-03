const Joi = require('joi');//for error handle

let express = require('express');
let mysql = require('mysql');
let bodyParser = require('body-parser');

//todo create connection

const db = mysql.createConnection({
   host     : 'localhost',
   user     : 'phpmyadmin',
   password : '11031997BoGdAn_',
   database : 'mix-boy'
});


//todo connect to db

db.connect((err) => {
   if(err){
       throw err;
   }
   console.log('all is ok');
});


const port = process.env.PORT || 3000;


const courses = [
    {   id:1,name:'course1'},
    {   id:2,name:'course2'},
    {   id:3,name:'course3'},
    {   id:4,name:'course4'},
    {   id:5,name:'course5'},
];



const app = express();

app.use(express.json());


app.get('/',(req,res) => {
    let news = {
        title:'Post one',
        desc: 'first get'
    };

    let sql = 'insert into news SET ?';

    let query = db.query(sql,news,(err,result) => {
        if (err) {
            throw err;
        }
        console.log('query is ok');
    });
    res.send('Hello world!');
});



app.get('/api/courses',(req,res) => {
    res.send(courses);
});


app.get('/api/courses/:id/',(req,res)=>{

    const course = courses.find(c => c.id === parseInt(req.params.id));

   if(!course) res.status(404).send('not found');

   res.send(course);

});


app.listen(port,() => console.log(`${port} listening`));


app.post('/api/courses',(req,res) => {

    const  schema = {
        name:Joi.string().min(3).required()
    };

    console.log(schema);

    const  result = Joi.validate(req.body,schema);

    console.log(result);
    if(result.error){
        res.status(400).send(result.error);
        return;
    }

    const course = {
        id: courses.length + 1,
        name: req.body.name
    };

    courses.push(course);
    res.send(course);
});


// app.put('/api/courses/:id',())
