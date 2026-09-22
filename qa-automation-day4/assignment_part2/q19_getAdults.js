// Q19
// Task: Given an array of people objects, write getAdults(people) returning only those with age >= 18. Use .filter().
function getAdults(people){
    return people.filter(p => p.age >= 18); //filter returns multiple elements that matches the condition
}
console.log(getAdults([{name:'A',age:15},{name:'B',age:22},{name:'C',age:30}]));
// [{name:'B', age:22}, { name: 'C', age: 30 }]