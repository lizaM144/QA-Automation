const banks = ["NIC Asia", "Nabil", "Global IME"];

// Correct: < length
for (let i = 0; i < banks.length; i++) {
  console.log(banks[i]); // because banks.length is 3, the last index is 2
}

// Broken: <= length
for (let i = 0; i <= banks.length; i++) {
  console.log(banks[i]);   // last one: undefined and the array does not have an index of 3
}

let attempts = 0;

while (attempts < 5) { //even 
    attempts++;
    console.log(attempts);
}

let pinTries = 0;

do {
  pinTries++;
  console.log(`PIN prompt ${pinTries}`);
} while (pinTries < 3);

const txn = { id: "TXN-90114", amountPaisa: 150000 };

console.log(`Txn: ${txn}`);
// Txn: [object Object]

console.log(txn);                    // fine, shows the object
console.log(JSON.stringify(txn, null, 2));  // readable