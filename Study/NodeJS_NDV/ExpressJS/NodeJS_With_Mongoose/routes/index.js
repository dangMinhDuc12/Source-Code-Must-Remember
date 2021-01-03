var express = require('express');
var router = express.Router();
const Contact = require('../models/contact.js')


/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* Xem dữ liệu */
router.get('/xem', function(req, res, next) {
  Contact.find({}) 
      .then(db => {
        res.render('xem', { 
          title: 'Trang xem dữ liệu',
          db
         });
      })
      .catch(next)
  
});

/* Xóa dữ liệu. */
router.delete('/xoa/:idCanXoa', function(req, res, next) {
  var id = req.params.idCanXoa;
  Contact.findByIdAndDelete(id)
          .then(() => res.redirect('/xem'))
          .catch(next)
  
});


//Sửa dữ liệu
router.get('/sua/:idCanSua', function(req, res, next) {
  var idCanSua = req.params.idCanSua;
  Contact.findOne({_id: idCanSua})
        .then(up => {
          
          res.render('sua', { 
            title: 'Trang sửa dữ liệu',
            up
           });
        })
});


router.put('/sua/:idCanSua', function(req, res, next) {
  var idCanSua = req.params.idCanSua;
  
  Contact.findByIdAndUpdate(idCanSua, req.body)
        .then(() => {
            res.redirect('/xem')
          
        })
});


/* Thêm dữ liệu */
router.get('/them', function(req, res, next) {
  
  res.render('them', { title: 'Trang thêm dữ liệu' });
});


router.post('/them', function(req, res, next) {
  Contact.create(req.body)
        .then(() => {
          res.redirect('/xem')
        })  
        .catch(next)
});

module.exports = router;
