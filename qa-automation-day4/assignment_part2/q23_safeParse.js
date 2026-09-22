// Q23
// Task: Write safeParse(str) that returns the parsed object, or null if the string is invalid JSON. Log 'done' in a finally block either way
function safeParse(str){
    try{
        return JSON.parse(str); //JSON.parse converts the JSON string into Javascript object
    }catch(err){
        return null;
    }
    finally{
        console.log('Done'); // runs regardless of success or failure
    }
    
}

console.log(safeParse('{"a":1}')); //  Done  {a:1}
console.log(safeParse('not json')); // Done  null