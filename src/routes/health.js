module.exports = function(app) {
    app.route('/health').get(async (req, res, next) => {
        try {
            return res.json({ status: 'OK' });
        } catch (err) {
            return next(err);
        }
    });
}