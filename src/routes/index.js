const home = require('./home')
const list = require('./list')
module.exports = function routes(app) {
    app.use('/list', list)
    app.use('/', home)
}