let socket = io();

socket.on('connect', function () {
    console.log('Connected to server');

    // socket.emit('createMessage', {
    //     from: 'bobross@gmail.com',
    //     text: 'gottem'
    // });

    socket.on('newMessage', function (email) {
        console.log('New message', email);
    });
});

socket.on('disconnect', function () {
    console.log('Oops. Server gone down');
});