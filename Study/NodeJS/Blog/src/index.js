/**
 * Express: FW của NodeJS dùng để khởi tạo server localhost
 * Nodemon: giống liveserver của VSCode khi reset file index.js thì trình duyệt cũng server cũng reset theo, ta không cần phải chạy lại server và có thể debug với nodemon.
 * Morgan: Mỗi khi reset server hay làm một việc gì sẽ ghi log ra terminal để ta kiểm tra
 * HandleBars: Giúp ta có thể viết file HTML trong NodeJS
 * Path: Giúp ta cấu hình lại đường dẫn
 *
 */

//Import Library
const path = require('path');
const express = require('express');
const morgan = require('morgan');
const handlebars = require('express-handlebars');
const methodOverride = require('method-override'); //sửa lại method khi gửi form Data
//Call Express
const app = express();
//Init Port
const port = process.env.port;

//Call routes từ file routes
const route = require('./routes/appRouter.js');

//Import DB
const db = require('./config/db/connectDB.js');

//Connect to DB
db.connect();

//override method của thẻ form
app.use(methodOverride('_method'));

//Dùng các file tĩnh (static file) như là img hay css
app.use(express.static(path.join(__dirname, 'public')));

//HTTP Logger
app.use(morgan('combined'));

//Dùng Middleware để làm trung gian lấy dữ liệu được gửi đi từ phương thức POST
app.use(
    express.urlencoded({
        extended: true, //Sửa lỗi warning body-parser
    }),
); //Dạng Form
app.use(express.json()); //Dạng JS: XTMLHttp, Fetch, Axios,...

//Template Engine

app.engine(
    '.hbs',
    handlebars({
        extname: '.hbs',
        helpers: {
            sum: (a, b) => a + b,
        },
    }),
);
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'app/views'));

//Start Server With Express
//Hiển thị nội dung ra màn hình

//Khởi tạo routes đã export từ file routes/index.js
route(app);

//Tạo Port cho web
app.listen(port, () => {
    console.log(`App của bạn đang chạy ở địa chỉ: http://localhost:${port}`);
});
