let socket = io();

socket.on('connect', function () {
    console.log('Connected to server');
});

socket.on('disconnect', function () {
    console.log('Oops. Server gone down');
});

socket.on('newMessage', function (message) {
    console.log('New message', message);
    let li = $('<li></li>');
    li.text(`${message.from}: ${message.text}`);

    $('#messages').append(li);
});

socket.on('newLocationMessage', function (message) {
    let li = $(`<li>${message.from}: </li>`);
    let a = $(`<a target="_blank" href="${message.url}">My current location</a>`);
    li.append(a);
    $('#messages').append(li);
});

$('#message-form').on('submit', function (e) {
    e.preventDefault();

    socket.emit('createMessage', {
        from: 'User',
        text: $('#message').val()
    }, function (data) {
        console.log(data);
    });
});

let locationButton = $('#send-location');
locationButton.on('click', function () {
    if (!navigator.geolocation) {
        return alert('Geolocation not supported by your browser');
    }

    navigator.geolocation.getCurrentPosition(function (position) {
        socket.emit('createLocationMessage', {
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
        });
    }, function (err) {
        alert('Unable to fetch location');
    });
});