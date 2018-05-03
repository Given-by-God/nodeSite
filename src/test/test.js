
let express = require('express');
let mysql = require('mysql');
let bodyParser = require('body-parser');

let app = express();
let port = 3000;

let posts = [
    {title:"lorem1lorem1lorem1lorem1"},
    {title:"lorem1lorem1lorem1lorem2"},
    {title:"lorem1lorem1lorem1lorem3"},
    {title:"lorem1lorem1lorem1lorem4"}
    ];


app.use (bodyParser.urlencoded({extended:true}));
app.use (bodyParser.json());



//рендерим
app.get ('/',(req,res) =>

        //(which page render),(what pass to view)
    res.render('app.ejs',{posts:posts})
    // res.send('test')
);


app.get("/post/:id",(req,res) => {
     let id = req.params.id;
     res.render( "post.ejs" , {post:posts[id]} )
    }
);


app.get('/write',(req,res)=> {
   res.render('write.ejs');
});

app.post('/write',(req,res) => {
    let title1 = req.body.formInput1;
    let title2 = req.body.formInput2;
    posts.push({
        title: title1,

    });
    posts.push({
        title: title2,
    });

    res.redirect('/');

});


app.get('/del/:id',(req,res) => {

   let id = req.params.id;

    console.log(id);
    console.log(posts[id]);
    posts.splice(id,1);

res.redirect('/');

   // this.posts.splice(id,1);
});


app.post('/edit/:id',(req,res) => {

    let title = req.body.editRow;
    let id = req.params.id;

    console.log(title);
    console.log(id);

    posts[id].title = title;

    res.redirect('/');
});


app.get('/edit/:id',(req,res) => {
   let id = req.params.id;

   console.log(id);

   res.render('edit.ejs',{ post:posts[id].title,id:id})
});




//listen 3000 port
app.listen(port,() =>
    console.log(`its work at port : ${port}`)
);