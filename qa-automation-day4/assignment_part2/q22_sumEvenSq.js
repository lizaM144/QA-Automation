// Q22
// Task: Given an array of numbers, return the sum of the squares of only the even numbers
function sumEvenSquares(num){
    return num.filter(n => n % 2 === 0)
              .map(n => n * n)
              .reduce((sum, n)=> sum + n, 0);
}


console.log(sumEvenSquares([1, 2, 3, 4]));   // 20   (2² + 4²)
// 1st -> .filter -> [2,4]
// 2nd -> .map    -> [4,16]
// 3rd -> .reduce -> [20]