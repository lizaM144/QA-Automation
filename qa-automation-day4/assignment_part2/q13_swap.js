// Q13
// Task: Write swap(a, b) that returns [b, a] using array destructuring — without a temporary variable
function swap(a,b) {
    [a,b] = [b,a]; // destructuring
    return [a,b];
}
console.log(swap(1,2)); // [ 2, 1]