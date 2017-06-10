const async = require('async');
const clone = require('./clone');

function PotterShoppingCart(_cart, _bookStore, _clerk, responseCallback) {
    // 購物車
    var cart = clone(_cart);

    // 書局
    var bookStore = clone(_bookStore);

    // 店員
    var clerk =clone(_clerk);

    async.waterfall([
        // 計算各書本的購買量
        (callback) => {
            // 遍歷購物車
            for (let i = 0; i < cart.length; i++) {
                for (let j = 0; j < bookStore.books.length; j++) {
                    if (bookStore.books[j].name === cart[i]) {
                        // 紀錄每類書的數量
                        bookStore.books[j].number = bookStore.books[j].number + 1;
                    }
                };
                if ((i + 1) === cart.length) {
                    callback();
                }
            }
        },
        (callback) => {
            // 按照書數量由小排到大
            bookStore.books = bookStore.books.sort((a, b) => {
                return a.number - b.number
            });

            callback();
        },
        (callback) => {
            for (let i = 0; i < clerk.bonus.length; i++) {
                // 收集第i數量、該數量為為n-i不同書籍的數量
                clerk.number[i] = bookStore.books[i].number;
                for (let j = 0; j < bookStore.books.length; j++) {
                    // 排除被安排套書後的剩餘的書
                    bookStore.books[j].number = bookStore.books[j].number - clerk.number[i];
                }

                if ((i + 1) === clerk.bonus.length) {
                    callback();
                }
            }
        },
        (callback) => {
            // 初始價格總合
            var moneySum = 0;
            
            // 轉置套書數量總表
            clerk.number = clerk.number.reverse();

            // 每i+1項為i+1套書的數量，數量*(i+1)套*100元*(i+1)套的折扣
            for (let i = 0; i < clerk.number.length; i++) {
                moneySum = moneySum + 100 * (i + 1) * clerk.number[i] * clerk.bonus[i];

                if ((i + 1) === clerk.number.length) {
                    callback(moneySum);
                }
            }
        }
    ], (moneySum) => {
        responseCallback(moneySum);
    });
}

module.exports = PotterShoppingCart;