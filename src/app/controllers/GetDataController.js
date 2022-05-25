const data = require('../models/model')

class GetDataController {

    updateData(req, res, next) {
        data.updateOne({}, { power: req.params.slug })
            .then(() => res.send(''))
            .catch(err => { })
    }

    index(req, res, next) {
        data.find({})
            .then(data => {
                const [{power}] = data
                res.send(power)
            })
    }
}

module.exports = new GetDataController