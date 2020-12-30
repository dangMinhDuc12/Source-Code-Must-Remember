var express = require('express');
var router = express.Router();


router.get('/', function(req, res, next) {
  req.session.monan = "Bun cha";
  res.send('Đây là trang express session router');
});

router.get('/lay-session', function(req, res, next) {
  
  res.send('Session đã lưu là: ' + req.session.monan);
});

router.get('/xoa-session', function(req, res, next) {
  req.session.destroy((err) => {
    console.log(err);
  });
  
  res.send('Session đã xóa ' );
});



module.exports = router;