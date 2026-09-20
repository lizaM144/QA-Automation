// Q4
// Task: Write sumEven(n) that returns the sum of all even numbers from 1 to n (inclusive).
let sum = 0;
function sumEven(n) {
    for (let i = 1; i<=n; i++){
        if(i % 2 === 0){
            
            sum+=i;
        }
    }
    console.log(`Sum of ${n} even numbers: ${sum}`);
}
sumEven(12);