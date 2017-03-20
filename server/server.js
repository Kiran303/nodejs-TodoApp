var express = require('express');
var bodyparser = require('body-parser');

var {mongoose} = require('./db/mongoose');
var {todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();

app.use(bodyparser.json());

app.post('/todos',(req,res) =>{

    var ntodo = new todo({
        text : req.body.text
    });

    ntodo.save().then((doc)=>{
       res.send(JSON.stringify(doc,undefined,2));
    },(e) =>{
       res.send('Error While Saving DAta',e);
    });
})


app.get('/todos',(req,res)=>{
    todo.find().then((doc)=>{
        res.send({doc});
        console.log('in success');
    },(err)=>{
        console.log(err);
    })
});



app.listen(3000 , ()=>{
    console.log('Listeing port 3000');
});
// var newuser = new user({
   
// });

// newuser.save().then((doc)=>{
//     console.log('result of save is ',doc);
// },(e) =>{
//     console.log(e);
// });

// var newtodo = new todo({
//     text :'Cook dinner'
// });

// newtodo.save().then((doc)=>{
//     console.log('result of save is ',doc);
// },(e) =>{
//     console.log(e);
// });

// var newtodo = new todo({
//     text :'Kiran text'
// });

// newtodo.save().then((doc)=>{
//     console.log('result of save is ',doc);
// },(e) =>{
//     console.log(e);
// });
