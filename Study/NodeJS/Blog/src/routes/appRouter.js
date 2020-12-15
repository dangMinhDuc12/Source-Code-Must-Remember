const newsRouter = require('./newsRouter');
const siteRouter = require('./siteRouter');
const coursesRouter = require('./coursesRouter');

function route(app) {
    //Cách 1
    // app.get("/", (req, res) => {
    //   res.render("home"); //Đang dùng Express-Handlesbars
    // });
    // app.get("/news", (req, res) => {
    //   console.log(req.query.q);
    //   res.render("news"); //Đang dùng Express-Handlesbars
    // });

    // app.get("/search", (req, res) => {
    //   // console.log(req.query.q);lấy ra query parameter khi người dùng nhập vào url ?q=&param2&param3
    //   res.render("search");
    // });

    //Cách 2

    app.use('/news', newsRouter);
    app.use('/courses', coursesRouter);
    app.use('/', siteRouter);

    // //Tạo đường dẫn(route) cho POST
    // app.post("/search", (req, res) => {
    //   //res.render("home"): Hiển thị file views/home ra màn hình
    //   //res.send("123"):Gửi chuỗi 123 ra màn hình
    //   //Query parameter là req.query còn Form Data là req.body

    //   console.log(req.body);

    //   res.send("");
    // });
}

module.exports = route;
