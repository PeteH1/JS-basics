"use strict";

// Write a function that creates a new h1 element, adds text to that element 
// and then adds the h1 to the tree of the document on load of the HTML page:

window.onload = function () {
    const heading = document.createElement("h1");
    const headingText = "This is the heading";
    document.body.appendChild(heading);
    heading.innerText = headingText;
}