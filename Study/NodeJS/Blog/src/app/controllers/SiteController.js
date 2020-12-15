const Course = require('../models/courseModel.js');
const { mutipleMongooseToObject } = require('../../ulti/mongoose.js'); //chỉ export hàm này mà không export hàm còn lại

class SiteController {
    // [GET] /home
    home(req, res, next) {
        // res.render('home');

        //Cách 1: dùng callback
        // Course.find({},function(err,courses) {
        //     if(!err) {
        //         res.json(courses)
        //     }
        //     else {
        //         //next: học ở bài middleware
        //         next(err);
        //         // res.status(400).json({error: 'Lỗi'})
        //     }

        // })

        //Cách 2 :Dùng Promise để viết
        Course.find({})
            .then((courses) => {
                // courses = courses.map(courses => courses.toObject()) //biến courses cũ thành một mảng mới được convert thành object bình thường
                courses = mutipleMongooseToObject(courses);
                res.render('home', {
                    courses,
                    // courses: mutipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    //[GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
