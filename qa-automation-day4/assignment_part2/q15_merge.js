// Q15
// Task: Write merge(obj1, obj2) that returns a new object combining both, where obj2's values win on conflicts. Do not mutate the inputs.
const obj1 = {a: 1, b: 2}
const obj2 = {b: 9, c: 3}

function merge(obj1, obj2){
    const mergedObj = {...obj1, ...obj2}; //since obj2 comes later, it replaces the value of b from 2 with 9
    return mergedObj;

}
console.log(merge(obj1, obj2)); // { a: 1, b: 9, c: 3 }