//const MongoClient = require('mongodb').MongoClient;
const { MongoClient, ObjectID } = require('mongodb');//ObjectID is a constructor
//Object destructing:Object destructing ,let's you pull out properties from a objecte creating variable ,this means we have a Object call user having name,age properties
/*var user ={name:"Shubham",age:22};
var {name} = user;
console.log(name);*/
/*
var obj = new ObjectID();
console.log(obj);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
    if (err) {
        return console.log("Unable to connect to mongodb server");
    }
    console.log("Connected to Mongodb server");
    db.collection('Todos').findOneAndUpdate({
        _id: new ObjectID('5a8e54cc0ca7e412f0f0d83b')
    }, {
            $set: {
                completed: true
            }
        },{
            returnOriginal:false
        }).then((result)=>{
            console.log(result);
        })
   //check update operator in google
   // db.close();
});//takes 2 argument(string,callback)