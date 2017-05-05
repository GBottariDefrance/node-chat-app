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

    socket.emit('newMessage', {
        from: 'Admin',
        text: 'Welcome to the chat',
        createdAt: new Date().toString()
    });

    socket.broadcast.emit('newMessage', {
        from: 'Admin',
        text: 'New user joined the chat',
        createdAt: new Date().toString()
    });

    socket.on('createMessage', (message) => {
        console.log(message);
        // io.emit('newMessage', {
        //     from: message.from,
        //     text:message.text,
        //     createdAt: new Date().toString()
        // });
        // socket.broadcast.emit('newMessage', {
        //     from: message.from,
        //     text: message.text,
        //     createdAt: new Date().toString()
        // });
    });

    socket.on('disconnect', () => {
        console.log('Wheres the client gone?');
    });
});

server.listen(port, () => {
    console.log(`Server is up on port ${port}`);
});