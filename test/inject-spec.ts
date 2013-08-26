/// <reference path="../src/staccato.ts" />
/// <reference path="../definitions/mocha/mocha.d.ts" />
/// <reference path="../definitions/chai/chai.d.ts" />

module Spec {

    var expect = chai.expect;

    describe("#inject", () => {

        it('should returns undefined if no bind value', () => {
            var v = staccato.inject('fire');
            expect(v).to.be.undefined;
        });

        it('hoge', () => {
            staccato.bind('water', () => 1);
            var v = staccato.inject('water');
            expect(v).to.equal(1);
        });

    });
}