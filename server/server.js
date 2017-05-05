const path = require('path');
const http = require('http');
const express = require('express');
const socketIO = require('socket.io');

const port = process.env.PORT || 3000;
let app = express();
let server = http.createServer(app);
let io = socketIO(server);

const publicPath = path.join(__dirname, '/../public');
app.use(express.static(publicPath));

io.on('connection', (socket) => {
    console.log('new user connected');

    socket.on('disconnect', () => {
        console.log('Wheres the client gone?');
    });

    socket.on('createMessage', (newEmail) => {
        console.log(newEmail);
    })

    socket.emit('newMessage', {
        from: 'mike@gmail.com',
        text: 'Hey whats up',
        createdAt: new Date().toString()
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});