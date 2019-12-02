'use strict';

const findLongestWord = function(string) {
    const words = string.split(' ');
    let longesWord = words[0];

    for (const word of words) {
        if (word.length > longesWord.length) {
            longesWord = word;
        }
    }
    return longesWord;
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'