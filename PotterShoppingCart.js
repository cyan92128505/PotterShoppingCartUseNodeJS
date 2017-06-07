const async = require('async');
const clone = require('./clone');

function PotterShoppingCart(_cart, _bookStore, response) {
    var cart = clone(_cart);
    var bookStore = clone(_bookStore);

    async.waterfall([
        // 計算各書本的購買量
        (asyncCallback) => {
            // 遍歷購物車
            for (let i = 0; i < cart.length; i++) {
                for (let j = 0; j < bookStore.books.length; j++) {
                    if (bookStore.books[j].name === cart[i]) {
                        bookStore.books[j].number = bookStore.books[j].number + 1;
                    }
                };
                if ((i + 1) === cart.length) {
                    asyncCallback();
                }
            }
        },
        (asyncCallback) => {
            for (let i = 0; i < bookStore.books.length; i++) {
                if (bookStore.books[i].number) {
                    bookStore.moneySum = bookStore.moneySum + bookStore.books[i].number * bookStore.books[i].price;
                }

                if ((i + 1) === bookStore.books.length) {
                    asyncCallback(bookStore.moneySum);
                }
            }
        }
    ], (moneySum) => {
        response(moneySum);
    });
}

module.exports = PotterShoppingCart;