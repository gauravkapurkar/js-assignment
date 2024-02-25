const News = require('../controllers/news');

module.exports = function(app) {
    app.route('/news').post(async (req, res, next) => {
        try {
            return res.status(201).json(await News.createNews(req.body));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/match/:id').get(async (req, res, next) => {
        try {
            return res.status(200).json(await News.fetchNewsByMatchId(req.params.id));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/tour/:id').get(async (req, res, next) => {
        try {
            return res.status(200).json(await News.fetchNewsByTourId(req.params.id));
        } catch (err) {
            return next(err);
        }
    });

    app.route('/news/sport/:id').get(async (req, res, next) => {
        try {
            return res.status(200).json(await News.fetchNewsBySportId(req.params.id));
        } catch (err) {
            return next(err);
        }
    });
}