//Code Sample 1
var msg = "two";
console.log("1. Msg = " + msg);

msg = 2 + msg;
console.log("2. Msg = " + msg);
console.log("This is discussed in Eloquent JS: Ch1 Automatic Type Conversion");

msg = 2 * msg;
console.log("3. Msg = " + msg);
console.log("This is discussed in Eloquent JS: Ch1 Automatic Type Conversion");

msg = 2 + 5 * 8;
console.log("4. Msg = " + msg);
console.log("This is discussed in Eloquent JS: Ch1 Automatic Type Conversion");


//Code Sample 2
const allNumbers = [2, 4, 6, 7, 8, 9, 11, 13];
let wantedNumbers = [];

let currentNumber = null;
for (let i = 0; i < allNumbers.length; i++) {
  currentNumber = allNumbers[i];
  if (currentNumber % 2 !== 0)
    break;
  else
    wantedNumbers.push(currentNumber);
}

console.log("All numbers = " + allNumbers);
console.log("Wanted numbers = " + wantedNumbers);