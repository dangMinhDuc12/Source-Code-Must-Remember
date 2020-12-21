
//Module trong NodeJS
// function hello(name) {
//   console.log('hello world ' + name);
// }

// var person = {
//   name: 'Duc',
//   age: 23
// };

// module.exports.hello = hello;
// module.exports.person = person;


//Ví dụ với router và module

const fs = require('fs');

function readHTML(pathHTML,res) {
  res.writeHead(200,{'content-type':'text/html; charset=utf-8'});
  fs.ReadStream(pathHTML).pipe(res);
}

function loadRouter(req,res) {
  var router = req.url;
  switch (router) {
    case '/':
      readHTML('./ex1.html',res);
      break;
    case '/trang2':
      readHTML('./trang2.html',res);
      break;

    default:
      res.writeHead(404,{'content-type':'text/html; charset=utf-8'})//phải viết content-type
      res.write('Failed');


  }
}
module.exports.loadRouter = loadRouter;
