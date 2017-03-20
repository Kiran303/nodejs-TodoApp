const {MongoClient,ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log('Unable to connect to Database');
    }
   
        // db.collection('Todos').find().toArray().then((docs)=>{
        // console.log(JSON.stringify(docs,undefined,2));
        // },(err)=>{
        //     console.log('Unable to fetch records',err);
        // });

        // console.log('Now fetching record with completed value is true');
        //  db.collection('Todos').find({completed:true}).toArray().then((docs)=>{
        // console.log(JSON.stringify(docs,undefined,2));
        // },(err)=>{
        //     console.log('Unable to fetch records',err);
        // });

        //  console.log('Now fetching record with by _id');
        //  db.collection('Todos').find({
        //      _id : new ObjectID('58cf78734450520958167758')
        //     }).toArray().then((docs)=>{
        // console.log(JSON.stringify(docs,undefined,2));
        // },(err)=>{
        //     console.log('Unable to fetch records',err);
        // });

        // console.log('Now Counting the records');
        //  db.collection('Todos').find().count().then((count)=>{
        // console.log(`Todos Count : ${count}`);
        // },(err)=>{
        //     console.log('Unable to fetch records',err);
        // });

         console.log('Fetching ecord from Users collection by name');
         db.collection('Users').find({name: 'Sarita'}).toArray().then((docs)=>{
                console.log(JSON.stringify(docs,undefined,2));
        },(err)=>{
            console.log('Unable to fetch records',err);
        });


        console.log('Connection Success');
        db.close();
   
    
});

