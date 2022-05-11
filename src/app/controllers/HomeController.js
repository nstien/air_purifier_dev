const data = require('../models/model')

class HomeController {
    index(req, res, next) {
        data.find({})
            .then(value => {
                res.render('home', ...value)
            })
            .catch(err => {})
        
    }
}

module.exports = new HomeController