
const mongoose = require('mongoose');

async function connectDB() {
  try {
    await mongoose.connect('mongodb://localhost:27017/mongooseDemo', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
  console.log('Kết nối tới DB thành công');
  }
  catch (err) {
  console.log('Kết nối thất bại ' + err);
  }
}

module.exports = {connectDB}