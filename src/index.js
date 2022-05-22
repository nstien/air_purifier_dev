const express = require('express')
const app = express()
const port = process.env.PORT || 3000
const path = require('path')
const routes = require('./routes/index')
const connectDB = require('./config/db')
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);
const { engine } = require('express-handlebars')
const data = require('./app/models/model')

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// db connect
connectDB()

//static files
app.use(express.static(path.join(__dirname, 'public')))

// handlebars
app.engine('.hbs', engine({ extname: '.hbs' }));
app.set('view engine', '.hbs');
app.set('views', path.join(__dirname, 'views'));

let a
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('status', (status) => {
        console.log('status: ' + status);
        a = status
    });
});

app.get('/data', (req, res) => {
    if(req.params) {
        data.updateOne({}, req.query)
            .then(() => {
                res.send(a)
            })
            .catch(err => {})
    }else {
        res.send(a)
    }
})

app.all('/', function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "X-Requested-With");
    next()
});

// route
routes(app)

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})

