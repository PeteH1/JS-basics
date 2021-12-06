"use strict";

// Displaying info about a Superhero squad
const output = document.querySelector("section#superHeroes");

axios
    .get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/example.json")
    .then(response => {
        const squadData = response.data;
        console.log("Response: ", response);

        const squadName = document.createElement("h1");
        squadName.innerText = squadData.squadName + ":";
        output.appendChild(squadName);

        const details = document.createElement("h3");
        details.innerText = `Home Town: ${squadData.homeTown}\nFormed in ${squadData.formed}
            Secret Base: ${squadData.secretBase}\nCurrently active: ${squadData.active}`;
        output.appendChild(details);

        for (let member of squadData.members) {
            let memberOutput = document.createElement("p");
            memberOutput.innerText = `Name: ${member.name}\nAge: ${member.age}
                Secret Identity: ${member.secretIdentity}\nPowers: \n`;
            for (let power of member.powers) {
                let powerText = document.createTextNode(`${power}, `);
                memberOutput.appendChild(powerText);
            }
            output.appendChild(memberOutput);

        }
    });

// Search for a king
const kingSearch = document.querySelector("kingSection");

axios
    .get("https://raw.githubusercontent.com/ewomackQA/JSONDataRepo/master/kings.json")
    .then(response => {

    })

