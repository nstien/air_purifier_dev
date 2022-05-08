const home = require('./home')

module.exports = function routes(app) {
    app.use('/', home)
}