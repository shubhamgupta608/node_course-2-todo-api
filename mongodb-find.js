const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to Mongodb server");
//Retrieving the values
/*
    db.collection('Todos').find({_id: new ObjectID("5a8e61cee7ab8dc6f6d6a19b")}).toArray().then((docs)=>{
        console.log("Todos");
        console.log(JSON.stringify(docs,undefined,2));
    },(err)=>{
        console.log("Unable to fetch Nodes",err);
    })
*/
/*
db.collection('Todos').find().count().then((count)=>{
    console.log(`Todos count:${count}`);
},(err)=>{
    console.log("Unable to fetch Nodes",err);
})*/
db.collection('Users').find({name:"Shubham"}).count().then((count)=>{
    console.log("Users count",count);
        //console.log(JSON.stringify(docs,undefined,2));
},(err)=>{
    console.log("Unable to fetch Nodes",err);
})
//db.close();
});

 