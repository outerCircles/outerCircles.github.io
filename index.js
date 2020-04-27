const app = require('express')();
const http = require('http').createServer(app);
const io = require('socket.io')(http);
const cors = require('cors');

require('dotenv').config({path:"./config/keys.env"})

app.use(cors());
io.on('connection', socket => {
    console.log('a User Connected');
    socket.on('new message', (message) => {
        socket.emit('new message', message);
        socket.broadcast.emit('new message', message);
    })
})
const port = process.env.PORT;

http.listen(port, () => {
    console.log(`Server is listing on port : ${port}`);
});

module.exports = port;