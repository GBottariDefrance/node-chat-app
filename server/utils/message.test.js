const expect = require('expect');
const { generateMessage } = require('./message');

describe('generateMessage', () => {
    it('should generate a correct message object', () => {
        let from = 'Bob Ross';
        let text = 'I am a painter';
        let message = generateMessage(from, text);
        expect(message).toInclude({ from, text });
        expect(message.createdAt).toBeA('number');
    });
});