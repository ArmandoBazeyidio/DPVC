console.log("Script Loaded");

const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const phoneRegex = /^\d{10}$/;
const nameRegex = /^[a-zA-Z]+$/;
const passwordRegex = /^(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{10,}$/;

document.getElementById('sign-up-form').addEventListener('submit', function(event) {
    let isValid = true;

    // First Name validation
    const firstNameInput = document.getElementById('first-name');
    const firstNameError = document.getElementById('first-name-error');
    if (!nameRegex.test(firstNameInput.value)) {
        firstNameError.style.display = 'inline';
        isValid = false;
    } else {
        firstNameError.style.display = 'none';
    }

    // Last Name validation
    const lastNameInput = document.getElementById('last-name');
    const lastNameError = document.getElementById('last-name-error');
    if (!nameRegex.test(lastNameInput.value)) {
        lastNameError.style.display = 'inline';
        isValid = false;
    } else {
        lastNameError.style.display = 'none';
    }

    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'inline';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // Phone Number validation
    const phoneInput = document.getElementById('phone-number');
    const phoneError = document.getElementById('phone-error');
    if (!phoneRegex.test(phoneInput.value)) {
        phoneError.style.display = 'inline';
        isValid = false;
    } else {
        phoneError.style.display = 'none';
    }

    // Password validation
    const passwordInput = document.getElementById('password');
    const passwordError = document.getElementById('password-error');
    if (!passwordRegex.test(passwordInput.value)) {
        passwordError.style.display = 'inline';
        isValid = false;
    } else {
        passwordError.style.display = 'none';
    }

    // Confirm Password validation
    const confirmPasswordInput = document.getElementById('confirm-password');
    const confirmPasswordError = document.getElementById('confirm-password-error');
    if (passwordInput.value !== confirmPasswordInput.value) {
        confirmPasswordError.style.display = 'inline';
        isValid = false;
    } else {
        confirmPasswordError.style.display = 'none';
    }

    // Prevent form submission if invalid
    if (!isValid) {
        event.preventDefault();
    }
});