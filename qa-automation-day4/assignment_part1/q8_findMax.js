// Q8
// Task: Write findMax(arr) that returns the largest number in the array. 
// Do not use Math.max.
function findMax(arr){
    let max = arr[0]; // assume the first element is max
    for(const num of arr){ // loop through every element of array
        if(num > max){
            max = num;
        }

    }
    return max;
}
console.log(findMax([1,6,8,2]));