const home = require('./home')
const data = require('./data')

module.exports = function routes(app) {
    app.use('/data', data)
    app.use('/', home)
}