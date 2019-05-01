const mongo = require('mongodb');
const MongoClient = require('mongodb').MongoClient;

const mongoURI = 'mongodb://localhost:27017/';

MongoClient.connect(mongoURI, { useNewUrlParser: true }, (err, db) => {
  if (err) throw err;
  let dbo = db.db('nodejs_mongodb_crud');

  dbo.collection('orders').aggregate([
    { $lookup:
       {
         from: 'products',
         localField: 'product_id',
         foreignField: '_id',
         as: 'orderdetails'
       }
     }
    ]).toArray(function(err, res) {
    if (err) throw err;
    console.log(JSON.stringify(res));
    db.close();
  });
});
