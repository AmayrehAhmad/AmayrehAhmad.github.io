"use strict";

function max(num1, num2) {
    if (num1 > num2) return num1;
    else return num2;
}

function maxOfThree(num1, num2, num3) {
    return max(max(num1, num2), num3);
}

function isVowel(char) {
    const vowels = ['a', 'e', 'i', 'o', 'u'];
    return vowels.includes(char.toLowerCase());
}

function sum(arr) {
    return arr.reduce((acc, curr) => acc + curr, 0);
}

function multiply(arr) {
    return arr.reduce((acc, curr) => acc * curr, 1);
}

function reverse(str) {
    return str.split('').reverse().join('');
}

function findLongestWordLength(words) {
    let maxLength = 0;
    for (const word of words) {
        if (word.length > maxLength) {
            maxLength = word.length;
        }
    }
    return maxLength;
}

function filterLongWords(words, i) {
    return words.filter(word => word.length > i);
}
