"use strict"

const getOutput = document.querySelector("#getOutput");
const getSUOutput = document.querySelector("#getSingleUser");

// Use anonymous functions, not arrow functions, for eventListeners
document.querySelector("#createForm").addEventListener("submit", function (event) {
    // disables page refreshing - HTML forms used to follow request link
    event.preventDefault();

    console.log("THIS: ", this);
    const form = this; // purely to make more obvious

    const data = {
        name: form.userName.value,
        job: form.userJob.value
    };

    console.log("DATA: ", data);

    axios
        .post("https://reqres.in/api/users", data)
        .then(res => {
            form.reset(); // resets the form
            form.userName.focus(); // puts cursor in name field
            console.log(res);
        })
        .catch(err => console.error(err));

});

document.querySelector("#registerForm").addEventListener("submit", function (event) {
    event.preventDefault();

    console.log("THIS: ", this);
    const form = this;

    const data = {
        email: form.email.value,
        password: form.password.value
    };

    console.log("DATA: ", data);

    axios
        .post("https://reqres.in/api/register", data)
        .then(res => {
            form.reset();
            form.email.focus();
            console.log(res);
        })
        .catch(err => console.error(err));
});

const getUser = () => {
    axios
        .get("https://reqres.in/api/users/2")
        .then(res => {
            console.log(res);
            const user = res.data.data;
            getSUOutput.innerHTML = "";
            const userContainer = document.createElement("div");

            const userName = document.createElement("p");
            userName.innerText = `Name: ${user.first_name} ${user.last_name}`;
            userContainer.appendChild(userName);

            const userEmail = document.createElement("p");
            userEmail.innerText = `Email: ${user.email}`;
            userContainer.appendChild(userEmail);

            const userAvatar = document.createElement("img");
            userAvatar.src = `${user.avatar}`;
            userContainer.appendChild(userAvatar);

            getSUOutput.appendChild(userContainer);
        })
        .catch(err => console.error(err));
}

const getUsers = () => {
    axios
        .get("https://reqres.in/api/users?page=2")
        .then(res => {
            console.log(res);
            const users = res.data.data;
            getOutput.innerHTML = ""; // blanks output field
            for (let user of users) {
                const userContainer = document.createElement("div");

                const userName = document.createElement("p");
                userName.innerText = `Name: ${user.first_name} ${user.last_name}`;
                userContainer.appendChild(userName);

                const userEmail = document.createElement("p");
                userEmail.innerText = `Email: ${user.email}`;
                userContainer.appendChild(userEmail);

                const userAvatar = document.createElement("img");
                userAvatar.src = `${user.avatar}`;
                userContainer.appendChild(userAvatar);

                getOutput.appendChild(userContainer);
            }
        })
        .catch(err => console.error(err));
}

getUsers();
getUser();