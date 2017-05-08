const moment = require('moment');

// let date = moment();
// date.add(1, 'year');
// console.log(date.format('MMM Do, YYYY'));

// ms timesstamp
let timestamp = moment().valueOf();

let createdAt = 200;
let date = moment(createdAt);
// date.add(7, 'hour');
console.log(date.format('h:mm a, YYYY'));