const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const mongoURI = 'mongodb://localhost:27017/';

MongoClient.connect(mongoURI, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err;
  let dbo = db.db('nodejs_mongodb_crud');

  // find single document
  // dbo.collection("customers").findOne({}, function(err, result) {
  //   if (err) throw err;
  //   console.log(result.name);
  //   db.close();
  // });

  // find all documents
  // dbo.collection("customers").find({}).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });

  // find some
  // dbo.collection("customers").find({}, { projection: { _id: 0, name: 1, address: 1 } }).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });

  // select all fields except address
  // dbo.collection("customers").find({}, { projection: { address: 0 } }).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });

  // only return field name
  // dbo.collection("customers").find({}, { projection: { _id: 0, name: 1 } }).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });

  // return all field except _id
  dbo.collection("customers").find({}, { projection: { _id: 0 } }).toArray(function(err, result) {
    if (err) throw err;
    console.log(result);
    console.log(result[0]);
    db.close();
  });

  /**
   * This query will raise an error because you can mix 1 and 0
   * Projection cannot have a mix of inclusion and exclusion.
   */
  // dbo.collection("customers").find({}, { projection: { name: 1, address: 0 } }).toArray(function(err, result) {
  //   if (err) throw err;
  //   console.log(result);
  //   db.close();
  // });
});
