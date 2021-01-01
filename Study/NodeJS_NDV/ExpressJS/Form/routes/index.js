var express = require('express');
var router = express.Router();

//Khai báo multer
var multer  = require('multer');


//Chỉ ra đường dẫn upload và tên file, đường dẫn upload giống res.render, nó sẽ đi vào pj và tìm đến folder public
var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'public/uploads')
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname + '-' + Date.now())
  }
})

var upload = multer({ storage: storage, fileFilter: checkFileUpload});

//Function Check file upload lên chỉ cho upload ảnh, dùng biểu thức chính quy regular expression
function checkFileUpload (req, file, cb) {
 if(!file.originalname.match(/\.(jpg|png|gif|jpeg)$/)){
      cb(new Error('File upload không đúng'))
 }
 else {
   cb(null,true);
 }
 
  
 
}




/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


//Bên trong upload.single để name của input
router.post('/',upload.single('anhsp'), function(req, res, next) {
  var name = req.body.tdsp;
  res.send('Đã nhận được dữ liệu ' + name);
});


module.exports = router;
