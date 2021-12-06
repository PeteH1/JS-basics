"use strict";

// Callbacks and Promises
const getValue = (cb) => {
    let number = parseInt(prompt("Enter a value"));
    return cb(number);
};

const addTen = (input) => input + 10;

console.log(getValue(addTen));

// Higher Order Functions
let grades = [
    { name: 'John', grade: 8, sex: 'M' },
    { name: 'Sarah', grade: 12, sex: 'F' },
    { name: 'Bob', grade: 16, sex: 'M' },
    { name: 'Johnny', grade: 2, sex: 'M' },
    { name: 'Cyrus', grade: 4, sex: 'M' },
    { name: 'Paula', grade: 18, sex: 'F' },
    { name: 'Jeff', grade: 5, sex: 'M' },
    { name: 'Jennifer', grade: 13, sex: 'F' },
    { name: 'Courtney', grade: 15, sex: 'F' },
    { name: 'Jane', grade: 9, sex: 'F' }
]

let isBoy = student => student.sex === "M";
let isGirl = student => student.sex === "F";

let getBoys = grades => (grades.filter(isBoy));
let getGirls = grades => (grades.filter(isGirl));

let average = grades => (grades.reduce((acc, curr) => (acc + curr.grade), 0) / grades.length);

let maxGrade = grades => (Math.max(...grades.map(student => student.grade)));
let minGrade = grades => (Math.min(...grades.map(student => student.grade)));

let highestGrade = maxGrade(grades);
let lowestGrade = minGrade(grades);
let highestGradeBoys = maxGrade(getBoys(grades));
let highestGradeGirls = maxGrade(getGirls(grades));
let lowestBoysGrade = minGrade(getBoys(grades));
let lowestGirlsGrade = minGrade(getGirls(grades));
