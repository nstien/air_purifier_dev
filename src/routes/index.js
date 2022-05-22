const home = require('./home')
const list = require('./list')
module.exports = function routes(app) {
    app.all('/', function(req, res, next) {
        res.header("Access-Control-Allow-Origin", "*");
        res.header("Access-Control-Allow-Headers", "X-Requested-With");
        next()
    });
    app.use('/list', list)
    app.use('/', home)
}