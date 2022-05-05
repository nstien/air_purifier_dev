
class DataController {
    index(req, res, next) {
        res.render('data')
    }
}

module.exports = new DataController