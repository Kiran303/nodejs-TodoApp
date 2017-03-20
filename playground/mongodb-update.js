const {MongoClient , ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to database');
    }

    console.log('Update the result');

    // db.collection('Todos').findOneAndUpdate({
    //     _id : new ObjectID("58cf9a21bd786f8f3b6ec09c")
    // },{
    //     $set : { completed : true }
    // },{
    //     returnOriginal: false
    // }).then((result)=>{
    //     console.log(result);
    // });

    db.collection('Users').findOneAndUpdate({
        _id : new ObjectID("58cf9a93bd786f8f3b6ec0ba")
    },{
        $set : { name : "Kiran"},
        $inc :{age :1}
    },{
        returnOriginal :true
    }).then((result)=>{
        console.log(result);
    });

    console.log('Connection successful');
    db.close();
})