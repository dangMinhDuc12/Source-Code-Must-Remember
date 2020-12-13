/**
 * Express: FW của NodeJS dùng để khởi tạo server localhost
 * Nodemon: giống liveserver của VSCode khi reset file index.js thì trình duyệt cũng server cũng reset theo, ta không cần phải chạy lại server và có thể debug với nodemon.
 * Morgan: Mỗi khi reset server hay làm một việc gì sẽ ghi log ra terminal để ta kiểm tra
 * HandleBars: Giúp ta có thể viết file HTML trong NodeJS
 * Path: Giúp ta cấu hình lại đường dẫn
 *
 */

//Import Library
const path = require("path");
const express = require("express");
const morgan = require("morgan");
const handlebars = require("express-handlebars");
//Call Express
const app = express();
//Init Port
const port = 3000;

//Dùng các file tĩnh (static file) như là img hay css
app.use(express.static(path.join(__dirname, "public")));

//HTTP Logger
app.use(morgan("combined"));

//Dùng Middleware để làm trung gian lấy dữ liệu được gửi đi từ phương thức POST
app.use(
  express.urlencoded({
    extended: true, //Sửa lỗi warning body-parser
  })
); //Dạng Form
app.use(express.json()); //Dạng JS: XTMLHttp, Fetch, Axios,...

//Template Engine

app.engine(
  ".hbs",
  handlebars({
    extname: ".hbs",
  })
);
app.set("view engine", ".hbs");
app.set("views", path.join(__dirname, "resources/views"));

//Start Server With Express
//Hiển thị nội dung ra màn hình
app.get("/", (req, res) => {
  res.render("home"); //Đang dùng Express-Handlesbars
});

app.get("/news", (req, res) => {
  console.log(req.query.q);
  res.render("news"); //Đang dùng Express-Handlesbars
});
app.get("/search", (req, res) => {
  // console.log(req.query.q);lấy ra query parameter khi người dùng nhập vào url ?q=&param2&param3
  res.render("search");
});

// //Tạo đường dẫn(route) cho POST
app.post("/search", (req, res) => {
  //res.render("home"): Hiển thị file views/home ra màn hình
  //res.send("123"):Gửi chuỗi 123 ra màn hình
  //Query parameter là req.query còn Form Data là req.body

  console.log(req.body);

  res.send("");
});

//Tạo Port cho web
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
