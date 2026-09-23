// Q30
// Task: Write withTimeout(promise, ms) that returns whichever settles first: the given promise, or a rejection with 'Timed out' after ms
function delay(ms){
    return new Promise(resolve =>{ 
        setTimeout(resolve, ms);
    })
}

function withTimeout(promise, ms){
    const timeoutPromise = new Promise((_, reject) =>{
        setTimeout(() => {
            reject("Timed out");
        }, ms);
    })
    return Promise.race([promise, timeoutPromise]); // race two promises. whichever rejects first, the result will be that
}

withTimeout(delay(3000), 1000)
    .then(() => console.log("Finished"))
    .catch(error => console.log(error));