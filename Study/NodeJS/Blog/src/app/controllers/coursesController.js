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
        req.body.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(req.body);
        course
            .save()
            .then(() => res.redirect('/me/stored/courses')) //Chuyển hướng trang khi save thành công
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
        Course.delete({ _id: req.params.id })
            .then(() => res.redirect('/me/stored/courses'))
            .catch(next);
    }

    //[PUT]  /courses/:id/restore
    restore(req, res, next) {
        Course.restore({ _id: req.params.id })
            .then(() => res.redirect('/me/trash/courses'))
            .catch(next);
    }

    // [DELETE] /courses/:id/forceDelete
    forceDelete(req, res, next) {
        Course.deleteOne({ _id: req.params.id })
            .then(() => res.redirect('/me/trash/courses'))
            .catch(next);
    }

    // [POST] /courses/handle-form-action
    handleFormAction(req, res, next) {
        switch (req.body.action) {
            case 'delete':
                Course.delete({ _id: { $in: req.body.courseIds } }) //viết như này có nghĩa là sẽ xóa thằng nào có id nằm trong list courseIds
                    .then(() => res.redirect('/me/stored/courses'))
                    .catch(next);

                break;

            default:
                res.json({ message: 'Hành động không phù hợp' });
        }
    }
}

module.exports = new CoursesController();
