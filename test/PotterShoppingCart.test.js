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

    it('一二三集各買了一本，價格應為100*3*0.9=270', () => {
        // arrange
        var PotterShoppingCart = require(path.join(process.cwd(), 'PotterShoppingCart.js'));

        PotterShoppingCart(['哈利波特第一集', '哈利波特第二集', '哈利波特第三集'], bookStore, (target) => {
            var expected = 270;

            // act
            var actual = target;

            // assert
            expect(actual).to.equal(expected);
        });
    });

    it('一二三四集各買了一本，價格應為100*4*0.8=320', () => {
        // arrange
        var PotterShoppingCart = require(path.join(process.cwd(), 'PotterShoppingCart.js'));

        PotterShoppingCart(['哈利波特第一集', '哈利波特第二集', '哈利波特第三集', '哈利波特第四集'], bookStore, (target) => {
            var expected = 320;

            // act
            var actual = target;

            // assert
            expect(actual).to.equal(expected);
        });
    });

    it('一次買了整套，一二三四五集各買了一本，價格應為100*5*0.75=375', () => {
        // arrange
        var PotterShoppingCart = require(path.join(process.cwd(), 'PotterShoppingCart.js'));

        PotterShoppingCart(['哈利波特第一集', '哈利波特第二集', '哈利波特第三集', '哈利波特第四集', '哈利波特第五集'], bookStore, (target) => {
            var expected = 375;

            // act
            var actual = target;

            // assert
            expect(actual).to.equal(expected);
        });
    });

    it('一二集各買了一本，第三集買了兩本，價格應為100*3*0.9 + 100 = 370', () => {
        // arrange
        var PotterShoppingCart = require(path.join(process.cwd(), 'PotterShoppingCart.js'));

        PotterShoppingCart(['哈利波特第一集', '哈利波特第二集', '哈利波特第三集', '哈利波特第三集'], bookStore, (target) => {
            var expected = 370;

            // act
            var actual = target;

            // assert
            expect(actual).to.equal(expected);
        });
    });

    it('第一集買了一本，第二三集各買了兩本，價格應為100*3*0.9 + 100*2*0.95 = 460', () => {
        // arrange
        var PotterShoppingCart = require(path.join(process.cwd(), 'PotterShoppingCart.js'));

        PotterShoppingCart(['哈利波特第一集', '哈利波特第二集', '哈利波特第二集', '哈利波特第三集', '哈利波特第三集'], bookStore, (target) => {
            var expected = 460;

            // act
            var actual = target;

            // assert
            expect(actual).to.equal(expected);
        });
    });

        it('買了0本，價格應為100*0 = 0', () => {
        // arrange
        var PotterShoppingCart = require(path.join(process.cwd(), 'PotterShoppingCart.js'));

        PotterShoppingCart([], bookStore, (target) => {
            var expected = 0;

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