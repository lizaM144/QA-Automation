// Q9
// Task: Write isPrime(n) that returns true if n is a prime number, otherwise false.
function isPrime(n){
    if(n < 2){
        return false;
    }
    for (let i = 2; i < n ; i++){
        if(n%i === 0){
            return false;
        }
    }
    return true;
}
console.log(isPrime(7));  // true
console.log(isPrime(8));  // false
console.log(isPrime(1));  // false