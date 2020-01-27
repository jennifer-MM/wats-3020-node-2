/*
Description:This program will look for an integer argument
Input:integer
Output:list of all values from 1 to the value of the integer
Usage: node 1-fizzbuzz
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getIntegerArg()

// test that input is a number and exit with error

if (isNaN(input) || !Number.isInteger(input)) {
  console.log("usage: node 1-fizzbuzz <integer>");
}
else {
  // iterate from 1 to the value of input
  // TODO provide info to for loop to iterate from 1 to value of input
  for (let i = 1; i <= input; i++) {
    
    //TODO provide for tests for divisible for 3,5, and 15 to create desired output
    if (i % 15 == 0) {
      console.log(`${i} fizzbuzz`);
  } else if (i % 5 == 0) {
      console.log(`${i} fizz`);
  } else if (i % 3 == 0) {
      console.log(`${i} buzz`);
  } else {
      console.log(`${i}`)
  }

  }
}


