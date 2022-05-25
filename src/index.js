const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const routes = require('./routes/index')
const connectDB = require('./config/db')
app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// db connect
connectDB()

// route
routes(app)

app.get('/', (req, res) => {
    res.send("Wellcome to page")
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

