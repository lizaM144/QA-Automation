// Q14
// Task: Given a user object, write a function that uses object destructuring to pull out name and email and return a template-literal string.
const u = { name: 'Sara', 
    email: 's@x.com', 
    age: 30 };


function describe(user){
    const {name, email} = user; // destructuring object
    return `${name} can be reached at ${email}`;
}

console.log(describe(u));