// Q7
// Task: Write reverseNumber(n) that returns the digits of n reversed, as a number. 
// Do not convert to a string.
function reverseNumber(n){
    let reverseNum = 0;
    while(n>0){ // 1234 > 0
        let last = n%10; // 4
        reverseNum = reverseNum * 10 + last; // 0 + 4 = 4
        n = Math.floor(n/10); //1234 -> 1234/10 (n/10) -> 123.4 -> 123 (math.floor)
        //Math.floor rounds a number down to the nearest integer
    }
    return reverseNum;
}
console.log(reverseNumber(1234));
console.log(reverseNumber(120410));