const path = require('path')
class HomeController {
    index(req, res, next) {
        res.sendFile(path.join(__dirname, '../../views/home.html'))
    }
}

module.exports = new HomeController