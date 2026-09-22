// Q20
// Task: Given an array of items each with a price, write totalPrice(items) returning the sum of all prices. Use .reduce()
function totalPrice(items){
    return items.reduce((sum, item) => sum + item.price, 0)
}
console.log(totalPrice([{price:10},{price:5},{price:20}]));  // 35