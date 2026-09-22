// Q16
// Task: Write sumAll(...nums) that accepts any number of arguments and returns their sum.
function sumAll(...nums){ //...nums collect multiple arguments into an array (rest)
    return nums.reduce((sum, num)=> sum+num, 0)
}

console.log(sumAll(1,2,3));
console.log(sumAll(2,2,2,2));