const transactions = [
  { id: 1, symbol: 'NABIL', type: 'BUY',  qty: 10, price: 512 },
  { id: 2, symbol: 'ADBL',  type: 'SELL', qty:  5, price: 240 },
  { id: 3, symbol: 'NABIL', type: 'BUY',  qty:  8, price: 505 },
  { id: 4, symbol: 'HDL',   type: 'SELL', qty: 12, price: 630 },
  { id: 5, symbol: 'ADBL',  type: 'BUY',  qty: 20 /* price missing! */ },
]

//2) count the number of buy trades
const buyCount = transactions.filter(t => t.type === 'BUY'); // filter to only BUY trades
console.log(`BUY count: ${buyCount.length}`);

//3) first Nabil trade id
const nabil = transactions.find(t => t.symbol === 'NABIL'); // find the first trade with symbol NABIL and get its id, if not found return 'No symbol found'
console.log(`First Nabil trade id: ${nabil.id}`);


//4) total value of all trades
const totalValue = transactions.filter(t => t.price !== undefined).reduce((sum, t) => sum + (t.qty * t.price), 0)
console.log(`Total value of all trades: ${totalValue}`);

//5) price of ADBL, if not found, return Rs N/A
// const missingPrice = transactions.find(t => t.price === undefined)?.price??'Rs N/A';
// console.log(`#${missingPrice.id} ${missingPrice.symbol}: ${missingPrice}`)

const missingPrice = transactions[4]?.price??'Rs N/A';
console.log(`#${transactions[4].id} ${transactions[4].symbol}: ${missingPrice}`)


//6) invalid transactions (missing price)
const invalid = transactions.find(t => t.price === undefined);
try{
    if(invalid) {
        throw new Error(`Transaction ${invalid.id}: price is missing`);
    }
    console.log('All transactions are valid');
}catch(e) {
    console.log(e.message);
}

//Total spent of bought trades
const boughtTotals = buyCount.filter(t => t.price !==undefined).reduce((sum, t) => sum + (t.qty * t.price), 0)
console.log(`Total spent on BUY trades : ${boughtTotals}`);