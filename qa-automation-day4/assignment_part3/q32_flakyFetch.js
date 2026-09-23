// Q32
// Task: Write retry(fn, times) that calls the async function fn. 
// If it rejects, try again — up to 'times' total attempts. 
// If all attempts fail, re-throw the last error

async function retry(fn, times){
    let lastError; // in case all the attempts fail
    for(let i =0; i < times; i++){ // loop the amount of 'times' we are going to attempt
        try{
            const result = await fn();
            return result; // if it succeeds return the result 
        }catch(error){
            lastError = error;
        }
    }
    throw lastError; // if every attempt failed
}

let count = 0; // keep count of times flakyFetch() has been called
async function flakyFetch(){
    count ++;
    if(count < 3){
        throw 'Fetch failed';
    }
    return 'Success';
}

retry(flakyFetch,3).then(result=>console.log(result)).catch(error=>console.log(error));