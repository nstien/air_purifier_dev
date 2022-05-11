const mongoose = require('mongoose')
const Schema = mongoose.Schema;

const data = new Schema({
    power: String,
    cod: String,
    temperature: String,
    co2: String,
    humidity: String,
}, {
    timestamps: true
});

module.exports = mongoose.model('data', data)