const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const data = new Schema({
    value: { type: String }
});

module.exports = mongoose.model('data', data)