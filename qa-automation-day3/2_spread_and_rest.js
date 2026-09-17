console.log(Math.max(1,2,3)); // max function takes separate values, not an array, so this will return 3

console.log(Math.max([1,2,3])); // this will return NaN because max function takes separate values, not an array, so it will try to compare the array with a number and return NaN

console.log(Math.max(...[1,2,3])); // this will return 3 because the spread operator breaks the array into separate values, so it will be like Math.max(1,2,3) and return 3





// pt2 SPREAD: break an array into separate values
const defaultUser = { role: 'user', active: true, region: 'Bagmati' };
const overrides = { role: 'admin', active: false }; // role becomes admin, active becomes false, region remains Bagmati
// clone, then change only what the test needs
const admin = { ...defaultUser, role: 'test' };

// later keys win, so order matters
const merged = {...defaultUser, ...overrides};// since overrides comes later, its values will overwrite the defaultUser values
console.log(admin, merged);



// // pt3 REST: gather the rest of the items into an array
function logAll(...messages) {
  console.log(messages);
}

logAll('apple', 'banana');
logAll('apple', 'banana', 'mango', 'grape');


// //pt 4
const [winner, ...others] = ['NABIL', 'ADBL', 'HDL']

console.log(winner); // will store the first item of the array, which is 'NABIL'
console.log(others); // will store the rest of the items in the array, which is ['ADBL', 'HDL']




// ============================
//Spread and rest in a NUTSHELL
// ============================


// // SPREAD: one array -> broken into pieces
// const base = [1, 2, 3];
// console.log(...base);        // 1 2 3   (three separate values, printed out)

// // REST: separate pieces -> gathered into one array
// function collect(...nums) {
//   console.log(nums);
// }
// collect(1, 2, 3);             // [ 1, 2, 3 ]   (one array)






// last part // while spreading it only spreads the plain values but not nested arrays or objects
const original = { user: 'Sita', tags: ['vip'] };
const clone = { ...original };

clone.user = 'Ram';        // fine, original.user unchanged
clone.tags.push('new');    // also changes original.tags and adds 'new' to the original.tags array

// the nested array is shared, not copied
console.log(original);