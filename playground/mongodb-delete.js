const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to database');
    }

   //console.log('deleteMany reocrds from collection');
    // db.collection('Todos').deleteMany({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

   // console.log('deleteOne record from collection');
    // db.collection('Todos').deleteOne({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    //console.log('findOneAndDelete deletes the record and returned deleted record');
    // db.collection('Todos').findOneAndDelete({text: 'Eat lunch'}).then((result)=>{
    //     console.log(result);
    // });

    // console.log('Operationson Users Collection ');
    // db.collection('Users').deleteMany({age : 23}).then((result)=>{
    //     console.log(result);
    // });

    //  db.collection('Users').deleteOne({name: 'Mike'}).then((result)=>{
    //     console.log(result);
    // });

     db.collection('Users').findOneAndDelete({_id : new ObjectID("58cf93c5bd786f8f3b6ec01c")}).then((result)=>{
        console.log(result);
     });

    console.log('Connection successful');
    db.close();
})