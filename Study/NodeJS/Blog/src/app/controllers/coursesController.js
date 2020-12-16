const Course = require('../models/courseModel.js');
const { mongooseToObject } = require('../../ulti/mongoose.js');

class CoursesController {
    //[GET] /courses/:slug
    show(req, res, next) {
        // res.send('123' + req.params.slug);//Bên router param truyền cái gì thì sẽ lấy ra cái đó, ở đây là /:slug thì lấy ra slug

        Course.findOne({ slug: req.params.slug })
            .then((course) => {
                res.render('showCourses', { course: mongooseToObject(course) });
            })
            .catch(next);
    }

    //[GET] /courses/creat
    creat(req, res, next) {
        res.render('creatCourses');
    }
    //[POST] /courses/store
    store(req, res, next) {
        // res.json(req.body)
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course
            .save()
            .then(() => res.redirect('/')) //Chuyển hướng trang khi save thành công
            .catch((error) => {});
    }

    //[GET] /courses/:id/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
            .then((course) => {
                res.render('editCourses', {
                    course: mongooseToObject(course),
                });
            })
            .catch(next);
    }

    //[PUT] /courses/:id
    update(req, res, next) {
        Course.updateOne({ _id: req.params.id }, req.body)
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
    //[DELETE] /courses/:id
    delete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }
}

module.exports = new CoursesController();
