var express = require('express');
var router = express.Router();
var multer  = require('multer')
var anhs = [];
const Sanpham = require('../models/db.js')

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
})
 
var upload = multer({ storage: storage })




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

//Up ảnh
router.post('/uploadanh',upload.any(), function(req, res, next) {
  anhs.push(req.files[0].path)
  console.log(anhs);
  res.send(req.files)
 
});


/* up tên và giá. */
router.post('/upsanpham', function(req, res, next) {
  Sanpham.create({
    ten: req.body.ten,
    gia: req.body.gia,
    anh: anhs
  })
  res.render('thanhcong');
});


router.get('/xemsp', function(req, res, next) {
  Sanpham.find({})
        .then(db => {
          res.render('xemsp', { db });
        })
 
});



module.exports = router;
