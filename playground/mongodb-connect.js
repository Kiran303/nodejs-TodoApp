//const MongoClient = require('mongodb').MongoClient;
const {MongoClient ,ObjectID} = require('mongodb');

// var user = {name:'kiran',age:23};
// var {name} = user;
// console.log('Destuctired value of user value: '+ name);

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to MongoDB server');        
    }
    db.collection('Todos').insertOne({
        text : 'Hello Kiran text',
        competed : true
    },(err,result) =>{
        if(err){
            return console.log("Unable to insert fields");
        }else{
            console.log(JSON.stringify(result.ops ,undefined,2));
        }
    });

    // db.collection('Users').insertOne({
    //     name :'Kiran',
    //     age : 23,
    //     location : 'Karve Nagar'
    // },(err,result) =>{
    //     if(err){
    //         return console.log('Unable to inert UserMongo data');
    //     }else{
    //     console.log(JSON.stringify(result.ops ,undefined,2));            
    //     }
    // });
        console.log('Connected to MongoDB');

     db.close();  
});

