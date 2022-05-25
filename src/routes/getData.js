const express = require('express')
const route = express.Router()
const getDataController = require('../app/controllers/GetDataController')

route.get('/:slug', getDataController.updateData)
route.get('/', getDataController.index)


module.exports = route