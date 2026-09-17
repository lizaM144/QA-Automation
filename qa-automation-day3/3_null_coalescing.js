const input = 2;
const qty = input || 10; // if input is falsy, then qty will be 10, otherwise it will be input
console.log(qty);

//--Optional chaining operator (?)
// list?.[0] //if list exists, then give me item of index 0, otherwise give me undefined
// user.getName?.() //if getName exists, then call it, otherwise give me undefined

// pt 2
// nullish coalescing operator (??) is similar to ||, but it only considers null and undefined as falsy values, while || considers all falsy values (0, '', false, NaN, null, undefined)
const value = null;
const amount = value ?? 10;//if value is null or undefined, then amount will be 10, otherwise it will be value
console.log(amount);