var formValidity = true;
var error = document.getElementById("errorMsg");
var name = document.getElementById("name");
var email = document.getElementById("email");
var link = document.getElementById("link");
var comments = document.getElementById("comments")

function validateForm(evt) {
    if (evt.preventDefault) {
        evt.preventDefault();
    } else {
        evt.returnValue = false;
    }
    formValidity = true;

    if (name.value === "" || email.value === "" || link.value === "" || comments.value === "") {
        formValidity = false;
    }

    if (formValidity === true) {
        error.innerHTML = "";
    } else {
        error.innerHTML = "Please complete the from"
    }
}

/*
function validateForm() {
    var nameError = document.getElementById("nameError");
    //var emailError = document.getElementById("emailError");
    //var linkError = document.getElementById("linkError");
    //var commentsError = document.getElementById("commentsError");

    if (nameError.value == "") {
        nameError.innerHTML = "Enter a name";
    }
}
*/
function createEventListeners(){
    var form = document.getElementsByTagName("form")[0];
    if (form.addEventListener) {
        form.addEventListener("submit", validateForm, false)
    } else if (form.attachEvent) {
        form.attachEvent("onsubmit", validateForm);
    }
}

if (window.addEventListener) {
    window.addEventListener("load", createEventListeners, false);
} else if (window.attachEvent) {
    window.attachEvent("onload", createEventListeners);
}
