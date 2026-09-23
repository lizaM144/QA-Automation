// Q30
// Task: Write riskyFetch() that returns a Promise which rejects with an Error('Network failed')
//  Then write a safe() async function that awaits it inside try/catch and logs the error message instead of crashing
function riskyFetch(){
    return new Promise((_, reject) => { 
        reject(new Error('Network Failed')); // reject means the promise failed
    });
}

async function safe(){
    try{
        await riskyFetch(); // this will wait for the promise to get rejected
    }catch(error){ // this will run because promise gets rejected
        console.log(`Caught: ${error.message}`);
    }
}
safe();