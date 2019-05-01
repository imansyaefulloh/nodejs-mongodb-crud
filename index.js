const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const mongoURI = 'mongodb://localhost:27017/';

MongoClient.connect(mongoURI, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err;
  let dbo = db.db('nodejs_mongodb_crud');
  dbo.createCollection("customers", (err, res) => {
    if (err) throw err;
    console.log('Collection created');
    db.close();
  });
});
