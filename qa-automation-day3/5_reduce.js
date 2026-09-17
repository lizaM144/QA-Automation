//reduce = take many items and reduce them to a single value

const stocks = [
  { symbol: 'NABIL', price: 512 },
  { symbol: 'ADBL',  price: 240 },
  { symbol: 'HDL',   price: 630 },
]

// (runningTotal, currentItem) => new runningTotal
// the 0 at the end is the starting value
const total = stocks.reduce((sum, s) => sum + s.price, 0)

console.log(total)


// step	   sum (coming in)	s.price	       sum + s.price (new sum)
// start	   0	                —	              —
// NABIL	   0	               512	            512
// ADBL	    512	               240	            752
// HDL	    752	               630	            1382