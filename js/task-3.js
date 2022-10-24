const findLongestWord = function (string) {
    const stringToArray = string.split(' ');
    console.log(stringToArray);
    let minSymbol = 0;
    let longestWord;

    for (let i = 0; i < stringToArray.length; i += 1) {
        if (stringToArray[i].length > minSymbol) {
            minSymbol = stringToArray[i].length;

            longestWord = i;
        }
    }
    return stringToArray[longestWord];
};

console.log(findLongestWord('The quick brown fox jumped over the lazy dog')); // 'jumped'

console.log(findLongestWord('Google do a roll')); // 'Google'

console.log(findLongestWord('May the force be with you')); // 'force'
