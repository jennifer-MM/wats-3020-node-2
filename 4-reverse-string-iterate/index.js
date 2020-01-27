//TODO fill in comment template
/*
Description: a program that takes a string as input and reverses it by iterating through the string, character by character
Input:a string
Output: the reversed string 
Usage: 4-reverse-string-iterate
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()

function reverseWithFullIteration(str) {
    let result = '';

    for (let i = str.length - 1; i >= 0; i--) {
        result += str[i];

    }
    return result;
}

function reverseWithHalfIteration(str) {
    console.log("result with half iteration", reverseWithHalfIteration(input));
    // STRETCH TODO write a function that reverses the string but only iterates over half of the input string.
}
function reverseWithHalfIteration(str){
    let result = []
    //swap characters from back and front
    for (let i = 0; i < str.length / 2; i++) {
        result[i] = str[(str.length - i)]
        result[str.length - i] = str[i]
    }
    return result.join('')
}
//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if (!input) {
    console.log("usage: node 4-reverse-string-iterate <string>");
    // TODO provide a usage statement
} else {
    // use functions to reverse string
    console.log("result with full iteration", reverseWithFullIteration(input));

    // STRETCH TODO output the result of your reverseWithHalfIteration function

}