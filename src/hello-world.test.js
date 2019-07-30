const {expect} = require('chai');
const helloWorld = require('./hello-world');

describe('Hello World', function() {
    it('should return `Hello World`', function() {
        expect(helloWorld()).to.equal('Hello World');
    });
})