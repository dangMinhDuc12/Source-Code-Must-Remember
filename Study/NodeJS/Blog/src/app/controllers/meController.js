const Course = require('../models/courseModel.js');
const { mutipleMongooseToObject } = require('../../ulti/mongoose.js');

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        //Cách 1
        // let courseQuery = Course.find({});

        // if (req.query.hasOwnProperty('_sort')) {
        //     const isValidType = ['asc','desc'].includes(req.query.type);
        //     courseQuery = courseQuery.sort({
        //         //phương thức sort giúp ta có thể sort tăng dần, giảm dần
        //         [req.query.column]: isValidType ? req.query.type : 'desc'

        //     });
        // }

        //Cách 2: dùng sortable tạo ở Model

        //Promise.all: Chạy cả 2 promise cùng lúc nếu xong mới lọt vào .then, như thế sẽ không sợ một thằng xong trước mà thằng kia chưa xong dẫn đến lỗi
        Promise.all([
            Course.find({}).sortable(req),
            Course.countDocumentsDeleted(),
        ])
            .then(([courses, deletedCourses]) => {
                res.render('storedCourses', {
                    courses: mutipleMongooseToObject(courses),
                    deletedCourses,
                });
            })
            .catch(next);
    }

    //[GET] /me/trash/courses
    trashCourses(req, res, next) {
        Course.findDeleted({})
            .then((courses) =>
                res.render('trashCourses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController(); // export class này ra ngoài để file js khác dùng
