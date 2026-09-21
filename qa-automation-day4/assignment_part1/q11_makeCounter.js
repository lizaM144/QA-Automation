// Q11
// Task: Write a function makeCounter() that returns another function. 
// Each time the returned function is called, it returns the next number starting from 1
function makeCounter(){
    let count = 0;
    return function(){ // return another function
        count ++;
        return count;
    };
}

const next = makeCounter();

console.log(next()); // 1
console.log(next()); // 2
// console.log(next()); // 3
