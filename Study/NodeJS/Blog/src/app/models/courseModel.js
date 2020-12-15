const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator'); //plugin giúp tự động thêm field slug trùng với name
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String },
        description: { type: String },
        image: { type: String },
        videoId: { type: String },
        slug: { type: String, slug: 'name', unique: true }, // property unique: không thể tạo 2 slug giống nhau, nó sẽ tự tạo ra shortId đằng sau của slug mới bị trùng
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { collection: 'courses' },
); // thêm option collection để viết tên cho collection của mình, không cho mongoose tự động thay đổi tên của collection nữa

module.exports = mongoose.model('courses', Course);
