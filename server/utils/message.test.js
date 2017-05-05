const expect = require('expect');
const { generateMessage, generateLocationMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate a correct message object', () => {
        let from = 'Bob Ross';
        let text = 'I am a painter';
        let message = generateMessage(from, text);
        expect(message).toInclude({ from, text });
        expect(message.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate a correct location message object', () => {
        let from = 'Bob Ross';
        let latitude = 32.5;
        let longitude = -45.8;
        let url = `https://www.google.com/maps?q=${latitude},${longitude}`;
        let locationMessage = generateLocationMessage(from, latitude, longitude);
        expect(locationMessage).toInclude({ from, url });
        expect(locationMessage.createdAt).toBeA('number');
    });
});