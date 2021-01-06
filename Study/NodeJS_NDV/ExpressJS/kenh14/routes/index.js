var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('clean_blog/index');
});
router.get('/index.html', function(req, res, next) {
  res.render('index');
});

// router.get('/tin-tuc', function(req, res, next) {
//   res.render('tin', { title: 'tin tức', content: 'Tin tức ngày hôm nay'});
// });

// router.get('/test-json', function(req, res, next) {
//   var list =  {listStudent: ['Đức', 'Hùng', 'Quân']} ;
//   res.render('json', {content: list });
// });

router.get('/about.html', function(req, res, next) {
  res.render('clean_blog/about');
});
router.get('/post.html', function(req, res, next) {
  res.render('clean_blog/post');
});
router.get('/contact.html', function(req, res, next) {
  res.render('clean_blog/contact');
});

router.get('/ajax', function(req, res, next) {
  // * là tất cả domain 
  res.header('Access-Control-Allow-Origin','*');
  res.header('Access-Control-Allow-Headers','Content-Type');
  res.json({name: 'Duc', age: 23, address: 'Hà Nội'})
});




module.exports = router;
