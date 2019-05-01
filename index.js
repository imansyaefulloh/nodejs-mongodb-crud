const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const mongoURI = 'mongodb://localhost:27017/';

MongoClient.connect(mongoURI, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err;
  let dbo = db.db('nodejs_mongodb_crud');
  let myObj = { name: 'Company Inc', address: 'Highway 37'};
  dbo.collection("customers").insertOne(myObj, (err, res) => {
    if (err) throw err;
    console.log('1 document inserted');
    db.close();
  });
});
