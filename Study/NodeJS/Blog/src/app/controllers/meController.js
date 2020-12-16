const Course = require('../models/courseModel.js');
const { mutipleMongooseToObject } = require('../../ulti/mongoose.js');

class MeController {
    //[GET] /me/stored/courses
    storedCourses(req, res, next) {
        Course.find({})
            .then((courses) =>
                res.render('storedCourses', {
                    courses: mutipleMongooseToObject(courses),
                }),
            )
            .catch(next);
    }
}

module.exports = new MeController(); // export class này ra ngoài để file js khác dùng
