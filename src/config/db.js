const mongoose = require('mongoose')

const connectDB = async () => {
    try {
        await mongoose.connect('mongodb+srv://nguyentien1107:minhkhang123.@cluster0.m2qod.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
        console.log('connect to successfully')
    } catch (error) {
        console.log('connect error')
    }
}

module.exports = connectDB