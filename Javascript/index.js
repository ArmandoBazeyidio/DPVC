// Regular expression for email validation
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// Form submit event handler
document.getElementById('sign-in-form').addEventListener('submit', function(event) {
    let isValid = true;

    // Email validation
    const emailInput = document.getElementById('email');
    const emailError = document.getElementById('email-error');
    if (!emailRegex.test(emailInput.value)) {
        emailError.style.display = 'inline';
        isValid = false;
    } else {
        emailError.style.display = 'none';
    }

    // If invalid, prevent form submission
    if (!isValid) {
        event.preventDefault();
    }
});
