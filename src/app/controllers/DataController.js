
class DataController {
    index(req, res, next) {
        res.send('h')
    }
}

module.exports = new DataController