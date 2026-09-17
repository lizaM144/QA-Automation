const trades = [
  { type: 'BUY',  amount: 5120 },
  { type: 'SELL', amount: 1200 },
  { type: 'BUY',  amount: 4040 },
  { type: 'SELL', amount: 2000 },
]

// filter to BUY trades, map to amounts, add them up
const spent = trades
  .filter(t => t.type === 'BUY') 

 // { type: 'BUY', amount: 5120 },
 // { type: 'BUY', amount: 4040 },


  .map(t => t.amount)
  // [5120, 4040]

  .reduce((sum, a) => sum + a, 0)

  // 0 + 5120 = 5120
  // 5120 + 4040 = 9160

console.log(spent)

const sold = trades.filter(t => t.type === 'SELL')
.find(t => t.amount > 1000)?.amount ?? 'no trades found'
console.log(sold)