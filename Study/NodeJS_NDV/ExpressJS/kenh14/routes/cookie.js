var express = require('express');
var router = express.Router();

router.get('/', function(req, res, next) {
  res.send('Đây là trang cookie router');
});

router.get('/luu-cookie/:sdt', function(req, res, next) {
  res.cookie('sdt', req.params.sdt) //Tạo 1 biến là sdt và lưu giá trị vào biến đó, lúc lưu là res và cookie là số ít
  res.send('Số điện thoại là: ' + req.params.sdt);
});

router.get('/lay-cookie', function(req, res, next) {
  res.send('Số điện thoại  được lưu là: ' + req.cookies.sdt); //Lúc lấy là req và cookies là số nhiều
});

router.get('/xoa-cookie', function(req, res, next) {
  res.clearCookie('sdt');
  res.send('Số điện thoại đã xóa: '); //Lúc lấy là req và cookies là số nhiều
});



module.exports = router;