
function connectDB() {
  //Kết nối DB
const MongoClient = require('mongodb').MongoClient;
const assert = require('assert');

// Connection URL
const url = 'mongodb://localhost:27017';

// Database Name
const dbName = 'contact';

// Use connect method to connect to the server
MongoClient.connect(url,{useNewUrlParser: true, useUnifiedTopology: true}, function(err, client) {
  assert.equal(null, err);
  console.log("Kết nối tới db thành công");

  const db = client.db(dbName);

  client.close();
}, );
}

module.exports = connectDB;

