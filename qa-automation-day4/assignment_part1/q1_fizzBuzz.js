// Q1
// Task: Write a function fizzBuzz(n) that prints numbers 1 to n. 
// For multiples of 3 print "Fizz", for multiples of 5 print "Buzz", and for multiples of both print "FizzBuzz".
const fizzBuzz = (n) => {
    for (let i = 1; i <=n; i++){
        if (i % 3 === 0 && i % 5 === 0) {
            console.log("FizzBuzz");
        } else if (i % 3 === 0) {
            console.log("Fizz");
        } else if (i % 5 === 0) {
            console.log("Buzz");
        } else {
            console.log(i);
        }
    }
}
fizzBuzz(30);