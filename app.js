// please checkout document.js where i have added sample events for testing
// i have not imported that file here

const { MongoClient } = require('mongodb');
const { ObjectId } = require("mongodb");

const express = require("express");
const http = require("http");
const app = express();
const baseurl="/api/v3/app";
// Connection URI
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);
app.use(express.urlencoded({extended:true}));
app.use(express.json());

const db = client.db('DBtech');
const collection = db.collection('documents');

async function connect() {
  try {
    await client.connect();
    console.log('Connected to MongoDB');
  } catch (error) {
    console.error('Error connecting to MongoDB:', error);
  }
}

connect();
  
async function insertEvent(documents, dbtech, event) {
  const db = client.db(dbtech);
  const collection = db.collection(documents);
  const filter={name:event.name};
  const update = { $set: event };
  const options = { upsert: true };
  const result = await collection.updateOne(filter,update,options);
  
  if (result.upsertedCount === 1) {
    console.log('Event inserted:', result.upsertedId);
  } else {
    console.log('Event already exists. Skipped insertion.');
  }
}
 

app.route(baseurl + "/events")
 .get((req, res) => {
    const eventid = req.query.id;
    const page = parseInt(req.query.page)||1 ;
    const type={_id:req.query.type};
    const limit=parseInt(req.query.limit)|| 3;
    const skip=(page-1)*limit;
    
  
    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
   

    const modifiedUrl = parsedUrl.toString();
    console.log(modifiedUrl);
    // console.log(eventid);
    console.log(req.query.page);
    console.log(req.query.limit);
    console.log(type);

    if (eventid) {
        collection
          .findOne({ _id:new ObjectId(eventid) })
          .then((event) => {
            if (event) {
              res.send(event);
            } else {
              res.status(404).send('Event not found');
            }
          })
          .catch((error) => {
            console.error('Error occurred while retrieving event:', error);
            res.sendStatus(500);
          });
      } else {
    
        collection.find()
        .sort({_id:-1})
          .skip(skip)
          .limit(limit)
          .toArray()
          .then((events) => {
            res.send(events);
          })
          .catch((error) => {
            console.error('Error occurred while retrieving events:', error);
          });
      }
    })

.post((req,res)=>{
    const eventid = req.query.id;
    

    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
    const modifiedUrl = parsedUrl.toString();
    insertEvent(`documents`,`DBtech`,{_id:new ObjectId(eventid)}).then(()=>{
        res.render("event has been added with id "+eventid);
        
    })
    .catch((error) => {
        console.error('Error occurred while adding event:', error);
        res.status(500).send('Event with same id exist');
      });
    return collection.find().toArray()
    .then((result)=>{
        if (result) {
            console.log(result);
            res.send(result);
          } else {
            res.status(404).send("Event not found");
          }
    })
    })
    .put((req,res)=>{
        const eventid = req.query.id;
        
    
        const parsedUrl = new URL(req.url, `http://${req.headers.host}`);
        const modifiedUrl = parsedUrl.toString();
        insertEvent(`documents`,`DBtech`,{_id:new ObjectId(eventid)}).then(()=>{
            res.render("event has been added with id "+eventid);
            
        })
        .catch((error) => {
            console.error('Error occurred while adding event:', error);
            res.status(500).send('Event with same id exist');
          });
        return collection.find().toArray()
        .then((result)=>{
            if (result) {
                console.log(result);
                res.send(result);
              } else {
                res.status(404).send("Event not found");
              }
        })
        })
    
.delete((req,res)=>{
    const eventid = req.query.id;

    const parsedUrl = new URL(req.url, `http://${req.headers.host}`);

    const modifiedUrl = parsedUrl.toString();
    console.log(modifiedUrl);
    if (eventid) {
        collection
        .deleteOne({ _id: new ObjectId(eventid) })
        .then((result) => {
          if (result.deletedCount === 1) {
            res.send('Event has been deleted.');
          } else {
            res.status(404).send('Event not found or already deleted.');
          }
        })
        .catch((error) => {
          console.error('Error occurred while deleting event:', error);
          res.sendStatus(500);
        });
      }


})    
    connect();
 app.listen(3000,()=>{
    console.log("connected to server");
 })
