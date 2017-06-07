var PotterBookInfoList = [{
        name: '哈利波特第一集',
        number: 0
    },
    {
        name: '哈利波特第二集',
        number: 0
    },
    {
        name: '哈利波特第三集',
        number: 0
    },
    {
        name: '哈利波特第四集',
        number: 0
    },
    {
        name: '哈利波特第五集',
        number: 0
    }
];


function PotterShoppingCart(Cart, callback) {
    var sum = 0;
    Cart.forEach((cartValue, index) => {
        PotterBookInfoList.forEach((book) => {
            if (book.name === cartValue) {
                book.number++;
            }
        });
    });

    PotterBookInfoList.forEach((book)=>{
        sum = sum + book.number*100;
    });

    return sum;
}

module.exports = PotterShoppingCart;