// output 
// order received
// pause for 3 second
// momo is ready!

// function makeMomo() {
//   console.log("Order received");
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       resolve("Momo is ready");
//     }, 3000); // 3 sec timeout
//   });
// }

// async function order() {
//   const result = await makeMomo();
//   console.log(result);
// }

// order();

// async function with await
// output 
// Order received
// Waiting... 1s
// Waiting... 2s
// Waiting... 3s
// Momo is ready
async function order() {
  const momo = makeMomo();   // started, no await yet

  let count = 0;
  const timer = setInterval(() => {
    count++;
    console.log(`Waiting... ${count}s`);
  }, 1000);

  const result = await momo;   // NOW we wait
  clearInterval(timer);
  console.log(result);
}

function makeMomo() {
  console.log("Order received");
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve("Momo is ready");
    }, 3000); // 3 sec timeout
  });
}
order();