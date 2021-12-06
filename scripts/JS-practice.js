'use strict';

console.log("Pete");
console.log("Hutchison");
console.log("Gloucestershire");
console.log("best starsign");

let car = { make: "Fiat", model: "Multipla" };

console.log("My favourite car is made by " + car.make + " and the model is " + car.model);

console.log("%c Orange and fantasy font and bold and black background and 10px padding",
    "color: orange; font-family: fantasy; font-style: Bold; background-color: black; padding: 10px");

let totalMoney = 9000;
let moneyPaidSoFar = 1234;

console.log(`The total bill is £${totalMoney} and the amount left to pay is ${totalMoney - moneyPaidSoFar}`);

let strictA = true;
let strictB = 1;

console.log(strictA != strictB);
console.log(strictA !== strictB);

let number = "word";

if (number <= 65 && number >= 18) {
    console.log("INSIDE THE RANGE");
} else if (number < 18) {
    console.log("OUTSIDE THE RANGE");
} else {
    console.log("SOMETHING ELSE");
}

// ternary-if syntax for checking if age is over 18
let age = 35;
let answer = age >= 18 ? "At least 18" : "Under 18";
console.log(answer);