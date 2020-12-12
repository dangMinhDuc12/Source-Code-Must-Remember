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

//HTTP Logger
app.use(morgan("combined"));

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
  res.render("news"); //Đang dùng Express-Handlesbars
});

//Tạo Port cho web
app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
