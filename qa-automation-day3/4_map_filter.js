// const nums = [1, 2, 3];  
// const doubled = []
// for (let i = 0; i < nums.length; i++) {
//   (doubled.push(nums[i] * 2))
// }

// console.log(doubled);

//new way using MAP function, which takes a callback function and applies it to each item of the array and returns a new array with the results
// const nums = [1, 2, 3];

// const doubled = nums.map(n => n * 2); //multiple each item of the array by 2 and return a new array with the results
// console.log(doubled); 



 //  find
const stocks = [
  { symbol: 'NABIL', price: 512 },
  { symbol: 'ADBL',  price: 240 },
  { symbol: 'HDL',   price: 630 },
];

// returns the FIRST match, not an array
const nabil = stocks.find(s => s.symbol === 'NABIL');
console.log(nabil);

// no match? you get undefined (so chain safely)
const missing = stocks.find(s => s.symbol === 'XYZ');
console.log('missing:', missing);
console.log('safe read:', missing?.price ?? 'not found');
//if missing exists, then give me the price
//if missing does not exist, then give me 'not found'

//filter
const expensive = stocks.filter(s => s.price > 500); //returns a new array with only the items that match the condition
console.log(expensive);