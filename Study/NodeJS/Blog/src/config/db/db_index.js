const mongoose = require('mongoose');

async function connect() {
    try {
        await mongoose.connect('mongodb://localhost:27017/dmd_education_dev', {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useFindAndModify: false,
            useCreateIndex: true,
        });
        console.log('Kết nối tới DB thành công');
    } catch (error) {
        console.log('Kết nối tới DB thất bại');
    }
}

module.exports = { connect }; //Export ra object để cho ta tạo ra một object có phương thức là connect thì lúc ta import sẽ gọi tới db.connect() sẽ có ý nghĩa hơn là gọi hàm không
