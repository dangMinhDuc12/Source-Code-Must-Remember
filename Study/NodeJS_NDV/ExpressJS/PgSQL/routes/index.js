var express = require('express');
var router = express.Router();


//NoSQL     VS       SQL 
/**
 * database <=> database
 * collections <=> tables
 * documents <=> rows
 * field <=> columns
 */



// Kết nối tới DB
const { Pool } = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nodepg',
  password: 'duc12121997',
  port: 5432,
})


/* GET home page. */
router.get('/', function(req, res, next) {
  //SELECT * FROM <collection> lấy tất cả dữ liệu từ collection contact (collection = table trong SQL)
  pool.query('SELECT * FROM contact', (err, res) => {
    console.log(err, res)
    
  });
  res.render('index', { title: 'Express' });
});

/* Thêm dữ liệu */
router.get('/them', function(req, res, next) {
  
  res.render('them', { title: 'Trang thêm dữ liệu' });
});

router.post('/them', function(req, res, next) {
  //Gõ câu lệnh SQL vào param1 của method query, các giá trị thêm vào được để trong dấu ngoặc vuông [] và truyền vào params thứ 2 của method query
  pool.query('INSERT INTO contact (ten,tuoi) VALUES ($1,$2) ',[req.body.ten,req.body.dienthoai], (err, res) => {
    console.log(err, res)
    
  });
  res.redirect('/xem');
});




//Xem dữ liệu
router.get('/xem', function(req, res, next) {
  pool.query('SELECT * FROM contact', (err, db) => {
    res.render('xem', { 
      title: 'Trang xem dữ liệu',
      db: db.rows
     });
   
  });
  
});


//Xóa dữ liệu
router.get('/xoa/:idXoa', function(req, res, next) {
  pool.query('DELETE FROM contact WHERE id = $1',[req.params.idXoa], (err, db) => {
    res.redirect('/xem');
   
  });
  
});


//Sửa dữ liệu


router.get('/sua/:idSua', function(req, res, next) {
  pool.query('SELECT * FROM contact WHERE id = $1',[req.params.idSua], (err, db) => {
    db.rows.forEach(up => {
      res.render('sua' , {
        title: 'Trang sửa dữ liệu',
        up
      })
    })
    
   
  });
  
});


router.post('/sua/:idSua', function(req, res, next) {
 
  pool.query(`UPDATE contact 
              SET   ten = $1 , 
                    tuoi = $2 
              WHERE id = $3 `,
          [req.body.ten,req.body.tuoi,req.params.idSua], (err, res) => {
    
    
  });
  res.redirect('/xem');
});




module.exports = router;
