const data = require('../models/model')

class DataController {
    
    index(req, res, next) {
        if(req.query) {
            data.updateOne({}, req.query)
                .then(() => res.send(''))
                .catch(err => {})
            return
        }
        res.send('')
    }
}

module.exports = new DataController