// Q24
// Task: Create a class ValidationError that extends Error. 
// Write validateAge(age) that throws a ValidationError with message 'Age must be positive' when age < 0, otherwise returns age
class ValidationError extends Error { // create new error type 'validation error' based on javascript's built in Error
    constructor(msg){ // receives the error message
        super(msg); // passes the message to parent 'Error' class
        this.name = "ValidationError"; // gives our error its own name
    }
}

function validateAge(age){
    if (age < 0){
        throw new ValidationError('Age must be positive');
    }
    return age;
}
console.log(validateAge(25)); // 25

try {
  validateAge(-3);
} catch (err) {
  console.log(`${err.name}: ${err.message}`); // ValidationError: Age must be positive
}