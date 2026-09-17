// ---- Old way: string concatenation ----
const firstName = "Liza";
const balance = 500;
const oldMessage = "Hi " + firstName + ", your balance is Rs " + balance + ".";

console.log(oldMessage);

// ---- New way: template literal ----
const newMessage = `Hi ${firstName}, your balance is Rs ${balance}.`;
console.log(newMessage);

// ---- Expressions inside ${ } ----
const price = 512;
const qty = 10;
console.log(`Total cost: Rs ${price * qty}`);

// ---- Multiline strings ----
const report = `Order summary
    Customer: ${firstName}
  Paid: Rs ${price * qty}`;
console.log(report);

// ---- A ternary (a quick if/else) inside the string ----
const passed = true;
console.log(`Test result: ${passed ? "PASSED" : "FAILED"}`);

console.log(`Hello
  
world`);
