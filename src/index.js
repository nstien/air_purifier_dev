const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const { engine } = require('express-handlebars')
const path = require('path')
// const methodOverride = require('method-override')
const routes = require('./routes/index')
const connectDB = require('./config/db')

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// db connect
connectDB()

// handlebars
app.engine('.hbs', engine({
    extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

//static files
app.use(express.static(path.join(__dirname, 'public')))

//method override
// app.use(methodOverride('_method'))

// route
routes(app)


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})