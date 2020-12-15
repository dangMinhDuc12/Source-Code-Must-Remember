const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        name: { type: String },
        description: { type: String },
        image: { type: String },
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    { collection: 'courses' },
); // thêm option collection để viết tên cho collection của mình, không cho mongoose tự động thay đổi tên của collection nữa

module.exports = mongoose.model('courses', Course);
