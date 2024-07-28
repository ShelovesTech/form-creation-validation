// adding the script to ensure the js runs after the entire HTML document has been loaded
document.addEventListener("DOMContentLoaded", () => {
    log.textContent += "load\n";
})

// form Selection
const form = document.getElementById("registration-form");

// feedbacl division selection
const feedbackDiv = document.getElementById('form-feedback');

// form submission event listener 
document.getElementById("form-feedback").addEventListener("click", function(submit){
    event.preventDefault()
})

//Retrive User Inputs
const userName = document.getElementById("userName");
const email = document.getElementById("email");
const password = document.getElementById("password");


const value = userName.value.trim;
const value = email.value.trim;
const value = password.value.trim;




 
//variable and array declaration
let isValid = 'false';
const messages = ["error", "try again", "null", "incorrect"];

//form validation username validation

