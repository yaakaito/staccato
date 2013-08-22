/// <reference path="../src/index.ts" />
/// <reference path="../definitions/mocha/mocha.d.ts" />
/// <reference path="../definitions/chai/chai.d.ts" />

describe('index', () => {
    var expect = chai.expect;
    it('has text `Hello TypeScript!`', () => {
        var index = new Index.HelloWorld();
        expect(index.text()).to.equal('Hello TypeScript!');
    });
});
