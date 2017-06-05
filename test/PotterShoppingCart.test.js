const path = require('path');
const expect = require('chai').expect;

describe('PotterShoppingChat Init', () => {
    it('PotterShoppingChat return PotterShoppingChat', () => {
        // arrange
        var target = require(path.join(process.cwd(), 'PotterShoppingCart.js'));
        var expected = 'PotterShoppingChat';

        // act
        var actual = target();

        // assert
        expect(actual).to.equal(expected);
    });
})