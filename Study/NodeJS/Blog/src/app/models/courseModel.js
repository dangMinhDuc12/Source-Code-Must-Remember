const mongoose = require('mongoose');
const slug = require('mongoose-slug-generator'); //plugin giúp tự động thêm field slug trùng với name
const mongooseDelete = require('mongoose-delete');
mongoose.plugin(slug);
const Schema = mongoose.Schema;

const Course = new Schema(
    {
        // _id: { type: Number}, thêm vào nếu muốn sửa id trong MongoDB thành number integer
        name: { type: String },
        description: { type: String },
        image: { type: String },
        videoId: { type: String },
        slug: { type: String, slug: 'name', unique: true }, // property unique: không thể tạo 2 slug giống nhau, nó sẽ tự tạo ra shortId đằng sau của slug mới bị trùng
        createdAt: { type: Date, default: Date.now },
        updatedAt: { type: Date, default: Date.now },
    },
    {
        collection: 'courses',
        // _id: false, thêm vào nếu muốn sửa id trong MongoDB thành number integer
        // timestamps: true //tự động thêm thời gian
    },
); // thêm option collection để viết tên cho collection của mình, không cho mongoose tự động thay đổi tên của collection nữa

//Tạo ra phương thức sortable để có thể sort ở nhiều nơi
Course.query.sortable = function (req) {
    if (req.query.hasOwnProperty('_sort')) {
        const isValidType = ['asc', 'desc'].includes(req.query.type);
        return this.sort({
            //phương thức sort giúp ta có thể sort tăng dần, giảm dần
            [req.query.column]: isValidType ? req.query.type : 'desc',
        });
    }
    return this; //this ở đây chính là những thằng đang được query bên controller
};

Course.plugin(mongooseDelete, {
    overrideMethods: 'all',
    deletedAt: true,
});

module.exports = mongoose.model('courses', Course);
