const path = require('path');
const PotterShoppingCart = require('./PotterShoppingCart.js');

PotterShoppingCart(
    ['哈利波特第一集', '哈利波特第二集'], {
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
    }, (target) => {
        console.log('result: '+target);
    });