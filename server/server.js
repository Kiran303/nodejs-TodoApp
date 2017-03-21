var express = require('express');
var bodyparser = require('body-parser');

var {ObjectID} = require('mongodb');
var {mongoose} = require('./db/mongoose');
var {todo} = require('./models/todo');
var {user} = require('./models/user');

var app = express();
var port = process.env.PORT || 3000;

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

//To access data by id i todos
app.get('/todos/:id',(req,res)=>{
    var id = req.params.id;
    if(!ObjectID.isValid(id)){
        res.status(404).send('Id Is Not Correct');
    }

    todo.findById(id).then((todos)=>{
        if(!todos){
            res.status(404).send();
        }
        res.send({todos});
    }).catch((e)=>{
        res.status(400).send();
    });

});

app.listen(3000 , ()=>{
    console.log(`Listinening port ${port}`);
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
