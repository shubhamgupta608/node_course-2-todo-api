//const MongoClient = require('mongodb').MongoClient;
const {MongoClient,ObjectID} = require('mongodb');//ObjectID is a constructor
//Object destructing:Object destructing ,let's you pull out properties from a objecte creating variable ,this means we have a Object call user having name,age properties
/*var user ={name:"Shubham",age:22};
var {name} = user;
console.log(name);*/
/*
var obj = new ObjectID();
console.log(obj);
*/

MongoClient.connect('mongodb://localhost:27017/TodoApp',(err, db)=>{
    if(err){
        return console.log("Unable to connect to mongodb server");
    } 
    console.log("Connected to Mongodb server");
    //Createing Collection = table and insert an record=document
   
    /*  db.collection('Todos').insertOne({
            text:"Something to do",
            completed:false
        },(err,result)=>{
        if(err){
            return console.log('Unable to insert todo',err);
        }
        //Object(key-value pair),Callback
        console.log(JSON.stringify(result.ops,undefined,2));
        });
    */
//Insert a new doc into Users (name,age,location)
        /*
        db.collection('Users').insertOne({
            name:"Shubham",
            age:22,
            location:"Punjab"
        },(err,result)=>{
            if(err){
                return console.log('Unable to insert in Users',err);
            }
            console.log(JSON.stringify(result.ops[0]._id.getTimestamp(),undefined,2));
        })
        */
    db.close();
});//takes 2 argument(string,callback)