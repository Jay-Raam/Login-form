document.addEventListener("DOMContentLoaded", function () {
    const registrationForm = document.getElementById("registration-form");

    if (registrationForm) {
        registrationForm.addEventListener("submit", function (event) {
            event.preventDefault();
            clearErrorMessages();

            const usernameField = document.getElementById("main-03");
            const emailField = document.getElementById("main-04");
            const genderField = document.getElementById("mani-01");
            const passwordField = document.getElementById("main-05");
            const confirmPasswordField = document.querySelector("input[type='password'][placeholder='Confirm Password']");

            if (usernameField.value.trim() === "") {
                displayErrorMessage("Username is required.", usernameField);
            }

            // Validate email
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (emailField.value.trim() === "") {
                displayErrorMessage("Email address is required.", emailField);
            } else if (!emailRegex.test(emailField.value.trim())) {
                displayErrorMessage("Please enter a valid email address.", emailField);
            }

            // Validate gender
            if (genderField.value === "") {
                displayErrorMessage("Gender is required.", genderField);
            }

            // Validate password
            if (passwordField.value.trim() === "") {
                displayErrorMessage("Password is required.", passwordField);
            }

            // Validate confirm password
            if (confirmPasswordField.value.trim() === "") {
                displayErrorMessage("Confirm Password is required.", confirmPasswordField);
            } else if (confirmPasswordField.value.trim() !== passwordField.value.trim()) {
                displayErrorMessage("Passwords do not match.", confirmPasswordField);
            }

            // If no error messages, submit the form
            if (!document.querySelector(".error-message")) {
                registrationForm.submit();
            }
        });
    } else {
        console.error("Registration form not found.");
    }

    // Function to display error messages
    function displayErrorMessage(message, field) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = message;
        errorMessage.classList.add("error-message");
        field.parentNode.appendChild(errorMessage);
    }

    // Function to clear existing error messages
    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach((message) => {
            message.remove();
        });
    }
});


// Login form validation
document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    loginForm.addEventListener("submit", function (event) {
        event.preventDefault(); 
        clearErrorMessages();

        const usernameField = document.getElementById("username");
        const passwordField = document.getElementById("password");

        // Validate username
        if (usernameField.value.trim() === "") {
            displayErrorMessage("Username is required.", usernameField);
        }

        // Validate password
        if (passwordField.value.trim() === "") {
            displayErrorMessage("Password is required.", passwordField);
        }

        // If no error messages, submit the form
        if (!document.querySelector(".error-message")) {
            loginForm.submit();
        }
    });

    // Function to display error messages
    function displayErrorMessage(message, field) {
        const errorMessage = document.createElement("p");
        errorMessage.textContent = message;
        errorMessage.classList.add("error-message");
        field.parentNode.appendChild(errorMessage);
    }

    // Function to clear existing error messages
    function clearErrorMessages() {
        const errorMessages = document.querySelectorAll(".error-message");
        errorMessages.forEach((message) => {
            message.remove();
        });
    }
});
