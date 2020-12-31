var express = require('express');
var router = express.Router();

/* [GET] / */
router.get('/', function(req, res, next) {
  req.session.sanphamdaxem = [];
  res.render('index', {tittle : 'Trang chủ'});
});


/* [GET] /portfolio-detail1.html/:id */
router.get('/portfolio-detail1.html/:id', function(req, res, next) {
  
  if( !req.session.sanphamdaxem.includes(req.params.id)){
    req.session.sanphamdaxem.push(req.params.id);
  }
  

 
  res.render('detail', {
    tittle: 'Trang chi tiết',
    id: req.params.id
  
  });
});


/* [GET] /da-xem */
router.get('/da-xem', function(req, res, next) {
  res.render('da-xem', {
    list : req.session.sanphamdaxem,
    tittle: 'Trang đã xem'
  });
});




module.exports = router;
