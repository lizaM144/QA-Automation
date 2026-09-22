// Q25
// Task: Without running it, write down the exact order the following logs appear, then run it to confirm. 
// Explain WHY in one sentence.

console.log('A');
setTimeout(() => console.log('B'), 0);
Promise.resolve().then(() => console.log('C'));
console.log('D');

// Run order
// A
// D
// C
// B
// javascript first performs all synchronous code (A,D), then runs Promise microtask (C), and then only runs setTimeout macrotask (B)
