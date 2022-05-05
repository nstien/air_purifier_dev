const express = require('express')
const route = express.Router()
const dataController = require('../app/controllers/DataController')

route.get('/', dataController.index)

module.exports = route