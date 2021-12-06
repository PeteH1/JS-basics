'use strict';

// Iteration

// Exercise 1
for (let A = 100; A <= 200; A++) {
    console.log(A);
}

// Exercise 2
for (let A = 100; A <= 200; A++) {
    if (A % 2 === 0) {
        console.log(" - ");
    } else {
        console.log(" * ");
    }
}

// Exercise 3
for (let number = 1; number <= 10; number++) {
    for (let count = 1; count <= 10; count++) {
        console.log(count);
        // currently prints 1-10 ten times
        // changing this to console.log(number) prints "1" ten times, "2" ten times etc.
    }
}

// Exercise 5
let today = new Date();
let dayNum = today.getDay();
switch (dayNum) {
    case 0:
        console.log("It's Sunday");
        break;
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
        console.log("It's a weekday");
        break;
    case 6:
        console.log("It's Saturday");
        break;
}

// Functions

// Exercise 1
const sub = (a, b) => a - b;
console.log(sub(50, 23));

// Exercise 2
const welcome = (name, age, gender) => "My name is " + name + ", I am " + age + " years old and " + gender;
console.log(welcome("Neil", 504, "male"));

// Exercise 3
const powerUp = (n1, n2) => n1 ** n2;
console.log(powerUp(2, 8));

// Objects, Arrays & JSON

// Exercise 1
const darthVader = {
    allegiance: "empire",
    weapon: "lightsabre",
    sith: true
};
console.log(darthVader);

// Exercise 2
// Using concatenation & interpolation/template literal
console.log("Darth Vader's allegiance is to the " + darthVader.allegiance);
console.log(`Darth Vader's weapon of choice is a ${darthVader.weapon}`);
console.log("Is Darth Vader a sith? " + darthVader.sith);
console.log(`Is Darth Vader a jedi? ${!darthVader.sith}`);

// Exercise 3
let myArray = ["hello", "everyone"];
console.log(myArray.length);
myArray.push("hats", "cats", "bats");
console.log(myArray.length);
myArray.shift();
for (let thing of myArray) {
    console.log(thing);
}

// Destructuring
let user = {
    name: "John",
    years: 30
};
let { name, years: age, isAdmin = false } = user;
console.log(`Name: ${name}, Age: ${age}, isAdmin: ${isAdmin}`);