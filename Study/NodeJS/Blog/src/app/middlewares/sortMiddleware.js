module.exports = function sortMiddleware(req, res, next) {
    res.locals._sort = {
        enabled: false,
        type: 'default',
    };
    if (req.query.hasOwnProperty('_sort')) {
        res.locals._sort.enabled = true;
        res.locals._sort.type = req.query.type;
        res.locals._sort.column = req.query.column;
    }

    next();
};

//tạo một middleware như trên để tạo ra một biến res.locals.tên_tự_đặt sau đó sau khi request middleware sẽ ghi đè lại biến đó với req.query gửi lên
