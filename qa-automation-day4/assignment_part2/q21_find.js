// Q21
// Task: Write findById(users, id) that returns the first user object whose id matches, or undefined. Use .find().
function findById(users,id){
    return users.find(u => u.id === id);
}
console.log(findById([{id:1},{id:2}], 2));  // {id:2}
console.log(findById([{id:3},{id:5}], 2));  // undefined