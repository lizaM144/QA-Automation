// const trade = {info: { id: { name: "ABC"}}}
// const { info: { id: { name } } } = trade;
// console.log(trade.info.id.name); // Output: ABC
// console.log(name); // Output: ABC

//======================
// destructuring
// ====================

const fruit = ['apple', 'banana', 'mango'];

// without destructuring — you'd use index numbers
console.log(fruit[0]);   // apple
console.log(fruit[1]);   // banana

// // with destructuring — you give names instead
// const [first, second, third] = fruit;

// console.log(first);   // apple
// console.log(second);  // banana
// console.log(third);   // mango

//in case of missing items, you can ignore them by leaving a blank space
const colors = ['red', , 'blue'];
const [first, second, third] = colors;
//the second item is ignored in this case, so second will be undefined
console.log(first);   // red
console.log(second);  // undefined
console.log(third);   // blue

// //or we can assign a default value to the second item
// const [first, second = 'green', third = 'none'] = colors;
// console.log(first);   // red
// console.log(second);  // green
// console.log(third);   // blue as third item is present in the array

// pt 2
// const stock = { symbol: 'NABIL', price: 512, qty: 10 }
// // const symbol = stock.symbol //old way
// const { price, symbol } = stock
// console.log(symbol);

// const { price: unitPrice, currency = 'NPR' } = stock 
// // take the price property and assign it to a new variable called unitPrice
// // currency is not present in stock, so it will take the default value
// console.log(`The price is ${currency}.${unitPrice}`);



// pt3 nested destructuring
const trade = { info: { broker: 'Q-Sec' } }
const { info: { broker } } = trade

console.log(trade.info.broker); // old way

console.log(broker); // modern




// pt4
const stocks = { symbol: 'NABIL', price: 512, qty: 10 }
// function summarise({stocks}) {
//   return `${stocks.symbol} trading at Rs ${stocks.price}`
// }

function summarise({ symbol, price }) { // destructuring the object directly in the function parameter  
  return `${symbol} trading at Rs ${price}`;
}
console.log(summarise(stocks));
