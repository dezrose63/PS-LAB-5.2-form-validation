const registrationForm = document.getElementById("registrationForm");
const errorMessages = document.getElementById("errorMessages");

registrationForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const { username, email, password } = registrationForm.elements;

  errorMessages.innerHTML = "";

  if (!username.value.trim()) {
    displayError("Username is required.");
    return;
  }

  if (!email.value.trim() || !isValidEmail(email.value)) {
    displayError("Please enter a valid email address.");
    return;
  }

  if (!password.value.trim() || !isStrongPassword(password.value)) {
    displayError(
      "Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, one digit, and one special character."
    );
    return;
  }

  alert("Registration successful!");
  registrationForm.reset();
});

function displayError(message) {
  errorMessages.innerHTML += `<div class="error">${message}</div>`;
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isStrongPassword(password) {
  return /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*]).{8,}$/.test(password);
}


// const userNameInput = document.querySelector("#username");
// const emailInput = document.querySelector("#email");
// const passwordInput = document.querySelector("#password");
// const confirmPasswordInput = document.querySelector("#confirmPassword");

// //Error Spans
// const userNameError = document.querySelector("#usernameError");
// const emailError = document.querySelector("#emailError");
// const passwordError = document.querySelector("#passwordError");
// const confirmPasswordError = document.querySelector("#confirmPasswordError");

// //Load saved username check for username in local storage
// document.addEventListener("DOMContentLoaded", function () {
//     const usernameFromStorage = localStorage.getItem("username");
//     if (usernameFromStorage) {
//       userNameInput.value = usernameFromStorage;
//     }
//     });

// //Real-time validation
// userNameInput.addEventListener("input", function (event) {
//     console.log(event.target.validity);
//     //check validity using constrain validation API
//     if (userNameInput.validity.patternMismatch) {
//         userNameInput.setCustomValidity("Username must be 5-15 characters.");
//     }
//     else { 
//             userNameError.textContent = userNameInput.validationMessage;
//             };

// // show a message with a type of the input
// function showMessage(input, message, type) {
// 	// get the small element and set the message
// 	const msg = input.parentNode.querySelector("small");
// 	msg.innerText = message;
// 	// update the class for the input
// 	input.className = type ? "success" : "error";
// 	return type;
// }

// function showError(input, message) {
// 	return showMessage(input, message, false);
// }

// function showSuccess(input) {
// 	return showMessage(input, "", true);
// }

// function hasValue(input, message) {
// 	if (input.value.trim() === "") {
// 		return showError(input, message);
// 	}
// 	return showSuccess(input);
// }

// function validateEmail(input, requiredMsg, invalidMsg) {
// 	// check if the value is not empty
// 	if (!hasValue(input, requiredMsg)) {
// 		return false;
// 	}
// 	// validate email format
// 	const emailRegex =
// 		/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

// 	const email = input.value.trim();
// 	if (!emailRegex.test(email)) {
// 		return showError(input, invalidMsg);
// 	}
// 	return true;
// }

// const form = document.querySelector("#registrationForm");

// const NAME_REQUIRED = "Please enter your name";
// const EMAIL_REQUIRED = "Please enter your email";
// const EMAIL_INVALID = "Please enter a correct email address format";

// form.addEventListener("submit", function (event) {
// 	// stop form submission
// 	event.preventDefault();

// 	// validate the form
// 	let usernameValid = hasValue(form.elements["username"], NAME_REQUIRED);
// 	let emailValid = validateEmail(form.elements["email"], EMAIL_REQUIRED, EMAIL_INVALID);
// 	// if valid, submit the form.
// 	if (usernameValid && emailValid) {
// 		alert("Demo only. No form was posted.");
// }
// })});

