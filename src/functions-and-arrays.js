// Iteration 1 | Find the Maximum
function maxOfTwoNumbers(x, y) {
   return Math.max(x, y);
}

console.log (maxOfTwoNumbers(13,25));


// Iteration 2 | Find the Longest Word
const words = ["mystery", "brother", "aviator", "crocodile", "pearl", "orchard", "crackpot"];

function findLongestWord(words) {
    if (words.length === 0) {
        return null;
    }
    
    let longestWord = words[0]; 
    for (let i = 1; i < words.length; i++) {
        if (words[i].length > longestWord.length) {
            longestWord = words[i]; 
        }
    }

    return longestWord; 
}

console.log(findLongestWord(words));



// Iteration 3 | Sum Numbers
const numbers = [6, 12, 1, 18, 13, 16, 2, 1, 8, 10];

function sumNumbers(numbers) {
    let sum = 0;
    for (let i = 0; i < numbers.length; i++){
        sum += numbers[i];
    }
    return sum;
}

console.log (sumNumbers(numbers));


// Iteration 4 | Numbers Average
const numbers2 = [2, 6, 9, 10, 7, 4, 1, 9];

function averageNumbers(numbers2) {
    let sum = 0;
    for (let i = 0; i < numbers2.length; i++){
        sum += numbers2[i];
    }
    return sum / numbers2.length;
}

console.log (averageNumbers(numbers2));


// Iteration 5 | Find Elements
const words2 = ["machine", "subset", "trouble", "starting", "matter", "eating", "truth", "disobedience"];

function doesWordExist(words2, wordToFind) {
    if (words2.length === 0){
        return null;
    }

    for (let i = 0; i < words2.length; i++){
        if (words2[i] === wordToFind){
            return true;
        }
    }

    return false;
}

console.log(doesWordExist(words2, "trouble"));