//TODO fill in comment template
/*
Description: Look for a string argument- If it doesn't find one it will display a message showing the format of the command.
Input: a string
Output:list of all the characters that appear in the string with a count for each. Output is sorted from greatest to least
Usage: node 5-character-count
*/

// get input using getargs
const getargs = require("../modules/getargs")
let input = getargs.getStringArg()


//test that it is a string
//TODO check for string argument and if no string is entered provide a usage statement and quit
if (!input || input.length == 0) {
  console.log(`usage: node 5-character-count <string>`);
}
else {
  let charCount = {};
  let characters = input.split(``);
  
  for (let character of characters){
    if (charCount[character]) { /* */
      charCount[character]++;
    } 
    else {
      charCount[character] = 1;
    }
}
  
/*for (let character in charCount) {
  console.log(`${character} ${charCount}`);
} */


let charArr = [];
  
  for (let character in charCount) {
    let newElem = {char:character, count:charCount[character]};
    charArr.push(newElem);
   
  }

  charArr.sort(function(a,b){
    if (a.count<b.count) return -1;
    else if (a.count>b.count) return 1;
    else return 0;
});

charArr.sort(function(a,b){
  return a.count - b.count;
});

for (let i=0; i < charArr.length; i++){
  console.log(`${charArr [i].char}: ${charArr[i].count}`);
  }
  
}

