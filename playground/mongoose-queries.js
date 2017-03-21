const {ObjectID} = require('mongoose');
const {mongoose} = require('./../server/db/mongoose');

const {todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');

// var id= '68cfa1d160edb60c28b7809f12';

// if(!ObjectID.isValid(id)){
//     console.log('Id is not valid');
// }
// todo.find({
//     _id:id
// }).then((todos) =>{
//     console.log('Todos by find()',todos);
// });

// todo.findOne({
//     text:'Adding data From Postman two'
// }).then((todo) =>{
//     console.log('Todo by findOne()',todo);
// });

// todo.findById(id).then((todo)=>{
//      if(!todo){
//          console.log('Id not found');
//      }
//     console.log('Todo by findById()',todo);
// }).catch((e) =>{ 
//     console.log(e);
// });


console.log('Now queries for USers');
var uid = '58cfae2772498d06180f93b3';

user.find({
    _id : uid
}).then((users) =>{
    console.log('Users by find()',users);
});

user.findOne({
    _id : uid
}).then((users) =>{
    console.log('Users by findOne()',users);
});

user.findById(uid).then((user) =>{
    console.log('Users by findById()',user);
});

