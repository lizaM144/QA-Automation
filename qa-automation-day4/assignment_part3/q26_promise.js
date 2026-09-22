// Q26
// Task: Write delay(ms) that returns a Promise which resolves after ms milliseconds. 
// Then use it to log 'Hi' after 1 second
function delay(ms){
    return new Promise(resolve =>{
        setTimeout(resolve, ms);// after 1000 ms, call resolve()
    })
}
delay(1000).then(() => console.log('Hi'));