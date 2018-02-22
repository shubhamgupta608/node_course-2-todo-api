const {MongoClient,ObjectID} = require('mongodb');
MongoClient.connect('mongodb://localhost:27017/TodoApp',(err,db)=>{
    if(err){
        return console.log("Unable to connect to MongoDB server");
    }
    console.log("Connected to Mongodb server");

    //deleteMany
    /*db.collection('Todos').deleteMany({text:'Eatlunch'}).then((result)=>{
        console.log(result);
    });
    */
   //deleteOne
   db.collection('Todos').deleteOne({text:'Hi'}).then((result)=>{
        console.log(result);
   });
    //findOneAndDelete
    db.collection('Todos').findOneAndDelete({completed:true}).then((result)=>{
        console.log(JSON.stringify(result,undefined,2));
   });
});