const {ObjectID} = require('mongodb');
const {mongoose} = require('./../server/db/mongoose');

const {todo} = require('./../server/models/todo');
const {user} = require('./../server/models/user');


// todo.remove({}).then((doc)=>{
//     console.log(`Removed all data`);
// });


// user.findByIdAndRemove('58d0c183111b7f8b2adce141').then((docs)=>{
//     console.log(docs);
// });

// user.findOneAndRemove({email : 'kiran.devkar@flowian.com'}).then((docs)=>{
//     console.log(docs);
// })

