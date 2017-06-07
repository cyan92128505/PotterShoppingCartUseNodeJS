const path = require('path');
const expect = require('chai').expect;

describe('PotterShoppingCart', () => {
    it('第一集買了一本，其他都沒買，價格應為100*1=100元', () => {
        // arrange
        var PotterShoppingCart = require(path.join(process.cwd(), 'PotterShoppingCart.js'));

        PotterShoppingCart(['哈利波特第一集'], bookStore, (target) => {
            var expected = 100;

            // act
            var actual = target;

            // assert
            expect(actual).to.equal(expected);
        });
    });

    it('第一集買了一本，第二集也買了一本，價格應為100*2*0.95=190', () => {
        // arrange
        var PotterShoppingCart = require(path.join(process.cwd(), 'PotterShoppingCart.js'));
        
        PotterShoppingCart(['哈利波特第一集', '哈利波特第二集'], bookStore, (target) => {
            var expected = 190;

            // act
            var actual = target;

            // assert
            expect(actual).to.equal(expected);
        });
    });
});

var bookStore = {
    moneySum: 0,
    books: [{
            name: '哈利波特第一集',
            number: 0,
            price: 100
        },
        {
            name: '哈利波特第二集',
            number: 0,
            price: 100
        },
        {
            name: '哈利波特第三集',
            number: 0,
            price: 100
        },
        {
            name: '哈利波特第四集',
            number: 0,
            price: 100
        },
        {
            name: '哈利波特第五集',
            number: 0,
            price: 100
        }
    ]
};