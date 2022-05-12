const express = require('express')
const route = express.Router()
const listController = require('../app/controllers/ListController')

route.get('/', listController.index)

module.exports = route