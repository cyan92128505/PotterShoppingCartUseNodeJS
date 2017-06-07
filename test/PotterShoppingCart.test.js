const path = require('path');
const expect = require('chai').expect;

describe('PotterShoppingCart', () => {
    it('第一集買了一本，其他都沒買，價格應為100*1=100元', () => {
        // arrange
        var PotterShoppingCart = require(path.join(process.cwd(), 'PotterShoppingCart.js'));
        PotterShoppingCart(['哈利波特第一集'], (target) => {
            var expected = 100;

            // act
            var actual = target;

            // assert
            expect(actual).to.equal(expected);
        });
    });
})