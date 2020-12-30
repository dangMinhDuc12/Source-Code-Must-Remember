var express = require('express');
var router = express.Router();

/* [GET] / */
router.get('/', function(req, res, next) {
  res.render('index', {tittle : 'Trang chủ'});
});


/* [GET] /portfolio-detail1.html */
router.get('/portfolio-detail1.html', function(req, res, next) {
  res.render('detail', {tittle: 'Trang chi tiết'});
});

module.exports = router;
