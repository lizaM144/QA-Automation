// Q17
// Task: Write getCity(user) that returns the user's city from user.address.city, or 'Unknown' if any part is missing.
function getCity(user){
    return user?.address?.city??'Unknown'; 
    //optional chaining(?.) would throw an error only if the value is null or undefined
    // but if the value is really undefined, we can use nullish coalescing(??) to define what output would be shown
}

console.log(getCity({ address: { city: 'Delhi' } })); // 'Delhi'
console.log(getCity({}));                           // 'Unknown'
