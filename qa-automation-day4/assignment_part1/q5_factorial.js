// Q5
// Task: Write factorial(n) that returns n! (n × (n-1) × … × 1). factorial(0) should return 1.
function factorial(n){
    let fact = 1;
    for (let i = 1; i <=n; i++){
        
        fact *= i;
    }
    return fact;
}
console.log(factorial(5));