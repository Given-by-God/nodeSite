let express = require('express'),

    bodyParser = require('body-parser'),
    joi = require('joi'),
    app = express(),
    path = require('path');


let video = require("./controllers/video"),
    db = require('./models/db');


let port = process.env.PORT || 4000;
// let rootPath = path.join(__dirname,'../');

//middleWare
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());

//static path to stylesheets
app.use('/public',express.static(__dirname + '/public'));

app.use('/img',express.static(__dirname + '/public/img'));

app.set('view engine','ejs');


//api

app.use('/news',require('./controllers/news'));
app.use('/news/:d/:m/:y/:id/:titleEu',require('./controllers/detailNews')());

// console.log(require('./controllers/detailNews'));


// let test1 = require('./controllers/detailNews');






app.use('/video',video);

app.get('/event',(req,res) =>
{
   res.render('../src/views/event')
});

app.get('/about',(req,res) =>
{
    res.render('../src/views/about')
});

app.get('/detail',(req,res) =>
{
    res.render('../src/views/detail')
});


app.get('/detailNews',(req,res) =>
{
    res.render('../src/views/detailNews')
});

app.get('/fighters',(req,res) =>
{
    res.render('../src/views/fighters')
});

app.get('/',(req,res) =>
{
    res.render('../src/views/main')
});

app.get('/streams',(req,res) =>
{
    res.render('../src/views/streams')
});



app.listen(port,()=>{
    console.log(`We are work on ${port} port`);
});