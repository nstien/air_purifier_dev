const data = require('../models/model')

class ListController {
    index(req, res, next) {
        data.find({})
            .then(value => {
                res.status(200).json(value)
            })
            .catch(err => {})
        
    }
}

module.exports = new ListController