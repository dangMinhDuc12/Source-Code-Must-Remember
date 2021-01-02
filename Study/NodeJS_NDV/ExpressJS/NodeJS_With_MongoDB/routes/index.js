var express = require('express');
var router = express.Router();
//Khai báo mongodb
const MongoClient = require('mongodb').MongoClient;

//Gọi hàm đổi id thường thành object id của mongodb
const convertObjectID = require('mongodb').ObjectID;


// URL Kết nối
const url = 'mongodb://localhost:27017';

// Tên DB
const dbName = 'contact';

//Tạo hàm insert
const insertDocuments = function(db, callback,duLieuThemVao) {
  // Get the documents collection
  const collection = db.collection('user');
  // Insert some documents, thêm nhiều là innsertMany và truyền vào 1 mảng object
  collection.insertOne(duLieuThemVao, function(err, result) {
    
    console.log("Thêm dữ liệu thành công");
    callback(result);
  });
};

//Tạo hàm tìm dữ liệu
const findDocuments = function(db, callback) {
  // Get the documents collection
  const collection = db.collection('user');
  // Find some documents
  collection.find({}).toArray((err, docs) => {
    callback(docs);
  });
}

//Tạo hàm Xóa
const removeDocument = function(db, callback,id) {
  // Get the documents collection
  const collection = db.collection('user');
  // Delete document where a is 3
  collection.deleteOne({_id: id}, function(err, result) {
  
    callback(result);
  });
}




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Thêm dữ liệu. */
router.get('/them', function(req, res, next) {
  res.render('them', { title: 'Thêm mới dữ liệu' });
});


router.post('/them', function(req, res, next) {
  var ten = req.body.ten;
  var dt = req.body.dt;
  var duLieuThemVao = {
    ten: ten,
    dienthoai: dt
  }
  
  //Gọi hàm insert để thêm dữ liệu
  MongoClient.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
    
    console.log("Thêm dữ liệu thành công");
  
    const db = client.db(dbName);
  
    insertDocuments(db, function() {
      client.close();
    }, duLieuThemVao);
  });

  res.redirect('/xem');
});

/* Xem dữ liệu. */
router.get('/xem', function(req, res, next) {
  

  // Gọi hàm  find để lấy dữ liệu
  MongoClient.connect(url, { useUnifiedTopology: true, useNewUrlParser: true },function(err, client) {
  
  console.log("Lấy thành công dữ liệu");

  const db = client.db(dbName);

  
     findDocuments(db, function(docs) {
      res.render('xem', { 
        title: 'Trang xem dữ liệu',
        db: docs
      })
      client.close();
    });
 
});
 
 
});


/* Xóa dữ liệu */
router.get('/xoa/:id', function(req, res, next) {
  var id = convertObjectID(req.params.id);
  //Code Xóa
  
  MongoClient.connect(url,{ useUnifiedTopology: true, useNewUrlParser: true }, function(err, client) {
    
    console.log("Xóa dữ liệu thành công");
  
    const db = client.db(dbName);
  
    removeDocument(db, function() {
      client.close();
    }, id);
  });

  res.redirect('/xem');
});

module.exports = router;
