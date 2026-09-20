// Q6
// Task: Write countVowels(str) that returns how many vowels (a, e, i, o, u) are in the string. Case-insensitive
function countVowel(str){
    str = str.toLowerCase();
    let count = 0;
    const vowel = 'aeiou';
    for(const char of str){ // loop through every character
        if(vowel.includes(char)) // does aeiou contain this character?
        count++;
    }
    return count;
}
console.log(countVowel('Desktop'));
