const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const mongoURI = 'mongodb://localhost:27017/';

MongoClient.connect(mongoURI, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err;
  let dbo = db.db('nodejs_mongodb_crud');

  // let myquery = { address: "Valley 345" };
  // let newvalues = { $set: {name: "Mickey", address: "Canyon 123" } };
  // dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document updated");
  //   db.close();
  // });

  // update only specific fields
  // let myquery = { address: "Canyon 123" };
  // let newvalues = { $set: {address: "Canyon 123 UPDATED" } };
  // dbo.collection("customers").updateOne(myquery, newvalues, function(err, res) {
  //   if (err) throw err;
  //   console.log("1 document updated");
  //   db.close();
  // });

  // update many documents
  var myquery = { address: /^S/ };
  var newvalues = {$set: {name: "Minnie"} };
  dbo.collection("customers").updateMany(myquery, newvalues, function(err, res) {
    if (err) throw err;
    console.log(res.result.nModified + " document(s) updated");
    db.close();
  });
});
