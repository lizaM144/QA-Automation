// Q12
// Task: Write wordCount(sentence) that returns an object mapping each word to how many times it appears
const wordCount = (sentence) => {
    const obj = {}; // we will store words as keys and their counts as values
    const words = sentence.split(' '); // split the sentence wherever there is ' ' (space)
    for(const word of words){
        obj[word] = (obj[word] || 0) + 1;
    }
    return obj;
}
console.log(wordCount('a b a a b c c'));

// obj [word] = (obj[word] || 0) + 1
// obj ['a']  = (obj ['a'] || 0) + 1
// obj ['a']  = (undefined || 0) + 1 --> since obj['a'] does not exist yet, it is undefined
// obj ['a']  =   0  + 1
// obj ['a']  =     1

// obj [word] = (obj[word] || 0) + 1
// obj ['b']  = ('b' || 0) + 1
// obj ['b']  = (undefined || 0) + 1
// obj ['b']  =   0  + 1
// obj ['b']  =     1
                                            
// obj [word] = (obj[word] || 0) + 1 
// obj ['a']  = (obj ['a'] || 0) + 1
// obj ['a']  = (1 || 0) + 1
// obj ['a']  =   1  + 1
// obj ['a']  =     2