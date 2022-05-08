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

app.use(express.json());
app.use(express.urlencoded({
    extended: true
}));

// db connect
connectDB()

//static files
app.use(express.static(path.join(__dirname, 'public')))

let a
io.on('connection', (socket) => {
    console.log('a user connected');
    socket.on('status', (status) => {
        console.log('status: ' + status);
        a = status
    });
});

app.get('/data', (req, res) => {
    res.send(a)
})

// route
routes(app)

server.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
