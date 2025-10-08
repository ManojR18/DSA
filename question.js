let pattern = "bxyzca";
let str = "abcabcabc";

function patternSort(pattern, str) {
    let storeRank = {};

    for(let i = 0; i < pattern.length; i++) {
        storeRank[pattern[i]] = i;
    }
    // b: 0, x : 1, y : 2, z : 3, c : 4, a : 5 
    let arr = str.split('');
    // [a, b, c, a, b, c, a, b, c]
    arr.sort((a, b) => storeRank[a] - storeRank[b]);
    return arr.join('');
}
let result = patternSort(pattern, str);
console.log(result); // bbbcccaaa 
