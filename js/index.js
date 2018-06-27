const p = console.log;
let btn = document.getElementById("submit-button");
let fn = document.getElementById("fullname");
let email = document.getElementById("email");
let msg = document.getElementById("message");


function validateForm() {
    let data = {};
    let errors = [];
    let regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;


    if (fn.value !== "") {
        data.fullName = fn.value;
    } else {
        errors.push("Please enter your full name.");
    }

    if (email.value !== "" && regex.test(email.value)) {
        data.email = email.value;
    } else {
        errors.push("Please enter your email.");
    }

    if (msg.value !== "") {
        data.message = msg.value;
    } else {
        errors.push("Please enter a message.");
    }

    if (fn.value !== "" && email.value !== "" && regex.test(email.value) && msg.value !== "") {
        p("COLLECTED DATA");
        p(data);
    } else {
        p("ERRORS");
        for (let k = 0; k < errors.length; k++) {
            p(errors[k]);
        }
    }
}

btn.addEventListener("click", validateForm);
