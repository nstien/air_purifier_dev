
class DataController {
    index(req, res, next) {
        res.send('hello')
    }
}

module.exports = new DataController