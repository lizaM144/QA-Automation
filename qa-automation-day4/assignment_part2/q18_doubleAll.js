// Q18
// Task: Write doubleAll(arr) that returns a NEW array with every number doubled. Use .map().
function doubleAll(arr){
    return arr.map(n => n * 2); // map goes through every item and create a new array containing doubled array number
}
console.log(doubleAll([2, 3, 4])); // [ 4, 6, 8 ]