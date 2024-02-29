// reduce

const myNums = [1, 2, 3, 4];

// const mytotal = myNums.reduce(function (acc, currval) {
// console.log(`acc: ${acc} and currval :${currval}`);
//   return acc + currval;
// }, 0);


const mytotal = myNums.reduce((acc,curval)=>acc+curval,0)

console.log(mytotal);

const shoppingCart = [
    {
        itemName : "js course",
        price : 299
    },
    {
        itemName : "python",
        price : 999
    },
    {
        itemName : "Mobile Dev Course",
        price : 5999
    },
    {
        itemName : "Data Science",
        price : 6999
    },
]

const price2Pay= shoppingCart.reduce((acc , item) =>acc+item.price,0)

console.log(price2Pay);

