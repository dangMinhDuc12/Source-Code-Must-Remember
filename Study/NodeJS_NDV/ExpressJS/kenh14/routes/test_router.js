var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Đây là trang test router');
});

router.get('/truyen-tham-so/:id-:name', function(req, res, next) {
  res.send(`Đây là trang test lấy tham số truyền vào url: ID là :${req.params.id} và tên là ${req.params.name}` );
});


//Regular Express

//Dấu hỏi sau chữ c: có chữ c cũng ok, không có cũng ok
router.get('/regular-exp/abc?d', function(req, res, next) {
  res.send('Đây là trang test regular express');
});

//Thêm dấu ngoặc () sẽ thao tác được với nhiều chữ
router.get('/regular-exp/a(bc)?d', function(req, res, next) {
  res.send('Đây là trang thao tác không cần chữ bc');
});


//Dấu sao: ở giữa chữ zing và chữ vn có thể gõ bất cứ thứ gì, nó vẫn sẽ match vào /zingvn
router.get('/zing*vn', function(req, res, next) {
  res.send('Zing VN');
});




module.exports = router;