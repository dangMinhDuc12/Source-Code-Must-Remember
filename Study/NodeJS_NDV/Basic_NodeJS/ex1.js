// console.log('hello world');

//Module trong NodeJS: Chỉ cần require 1 lần sau đó gọi đến tên biến đã export ra là dùng được ở file khác
// var moduleEx1 = require('./moduleEx1.js') // Bắt buộc có ./ lúc require kể cả cùng cấp
// moduleEx1.hello('Duc');
// console.log(moduleEx1.person);


//Cách khởi tạo 1 server trong NodeJS
// const http = require('http');
// const fs = require('fs'); //Module giúp đọc file html
// http.createServer((req, res) => {
//   res.writeHead(200,{'content-type':'text/html; charset=utf-8'});//plain là text thường đổi sang html để đọc html
//   // res.write('<h1>Kết nối server thành công</h1>'); write ra server một đoạn mã
//   // res.end();
//   fs.ReadStream('./ex1.html').pipe(res);
// }).listen(3000);


// Cách tạo router
// const http = require('http');
// http.createServer((req, res) => {
//   console.log(req.url); //Hàm lấy ra router
// }).listen(3000);


//Ví dụ với router và module
const http = require('http');
const moduleEx1 = require('./moduleEx1.js')
http.createServer(moduleEx1.loadRouter).listen(3000);