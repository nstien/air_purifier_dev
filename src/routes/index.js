const list = require('./list')
const data = require('./data')
const getData = require('./getData')
const cors = require('cors')

module.exports = function routes(app) {
    app.use(cors({
        origin: '*'
    }));
    app.use('/data', data)
    app.use('/getdata', getData)
    app.use('/list', list)
}