"use strict";

const bigMinus = document.querySelector("#bigMinus");
const littleMinus = document.querySelector("#littleMinus");
const reset = document.querySelector("#reset");
const littlePlus = document.querySelector("#littlePlus");
const bigPlus = document.querySelector("#bigPlus");

const numberBox = document.querySelector("#numberBox");

const history = document.querySelector("#numHistory");

const resetHandler = (event) => {
    numberBox.value = 0;
    addToHistory();
}

// The 4 handlers below could instead be 1 method that applied to all +/- buttons
const bigMinusHandler = (event) => {
    const init = numberBox.value;
    const output = parseInt(init) - 85;
    numberBox.value = output;
    addToHistory();
}

const littleMinusHandler = (event) => {
    const init = numberBox.value;
    const output = parseInt(init) - 39;
    numberBox.value = output;
    addToHistory();
}

const littlePlusHandler = (event) => {
    const init = numberBox.value;
    const output = parseInt(init) + 14;
    numberBox.value = output;
    addToHistory();
}

const bigPlusHandler = (event) => {
    const init = numberBox.value;
    const output = parseInt(init) + 67;
    numberBox.value = output;
    addToHistory();
}

// Could tweak this to do the work of above methods - doesn't work atm
// const plusMinusHandler = (event, change) => {
//     const init = numberBox.value;
//     const output = parseInt(init) + parseInt(change);
//     numberBox.value = output;
//     addToHistory();
// }

const addToHistory = () => {
    history.textContent += `${numberBox.value}, `;
}

bigMinus.addEventListener("click", bigMinusHandler);
littleMinus.addEventListener("click", littleMinusHandler);
littlePlus.addEventListener("click", littlePlusHandler);
bigPlus.addEventListener("click", bigPlusHandler);

reset.addEventListener("click", resetHandler);
