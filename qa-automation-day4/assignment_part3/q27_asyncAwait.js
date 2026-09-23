// Q27
// Task: Using your delay(ms) from Q26, write an async function run() that logs 'Start', waits 1 second, then logs 'End'
function delay(ms){
    return new Promise(resolve =>{ 
        setTimeout(resolve, ms);
    })
}

async function run(){
    console.log('Start');
    await delay(1000); //await waits for the promise to finish in the async function
    console.log('End')
}
run();