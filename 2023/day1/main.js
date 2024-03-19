const fs = require("node:fs");

const NUMBERS = ['zero', 'one', 'two', 'three', 'four', 'five', 'six', 'seven', 'eight', 'nine']

function find(index, data) {
  let word = data[index] + data[index + 1] + data[index + 2];
  let foundIndex = NUMBERS.findIndex(el => el === word);
  if (foundIndex > -1) return foundIndex;
  word = word + data[index + 3];
  foundIndex = NUMBERS.findIndex(el => el === word);
  if (foundIndex > -1) return foundIndex;
  word = word + data[index + 4];
  foundIndex = NUMBERS.findIndex(el => el === word);
  return foundIndex > -1 ? foundIndex : null;
}

fs.readFile("./input.txt", "utf8", (err, data) => {
  if (err) console.log(err);
  else {
    let sum = 0;
    let firstNum = "";
    let lastNum = "";
    let i = 0;
    let j = 0;
    while (j < 1000) {
      if (data[i] === "\n") {
        sum += parseInt(firstNum + (lastNum || firstNum));
        firstNum = "";
        lastNum = "";
        j++;
      } else {
        if (parseInt(data[i])) {
          if (firstNum === "") firstNum = data[i];
          else lastNum = data[i];
        } else {
          const foundNumber = find(i, data);
          if (foundNumber || foundNumber === 0) {
            if (firstNum === "") firstNum = foundNumber.toString();
            else lastNum = foundNumber.toString();
          }
        }
      }
      i++;
    }
    console.log(sum);
  }
});
