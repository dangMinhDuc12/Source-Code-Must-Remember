class NewsController {
    // [GET] /news
    index(req, res) {
        res.render('news');
    }

    //[GET] /news:slug (slug: param của URL)
    show(req, res) {
        res.send('news detail');
    }
}

module.exports = new NewsController(); // export class này ra ngoài để file js khác dùng
