// This script handles the form validation for a user registration form.
document.addEventListener('DOMContentLoaded', function() {

    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    form.addEventListener('submit', function(event) {
        // Stop the form from submitting the traditional way (which reloads the page).
        event.preventDefault();

        // Get the user's input and remove any extra whitespace from the ends.
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Prepare for validation.
        let isValid = true;       
        const messages = [];      


        // 1. Username Validation: Check if the username is at least 3 characters long.
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // 2. Email Validation: Check if the email contains '@' and '.' characters.
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // 3. Password Validation: Check if the password is at least 8 characters long.
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }


        // Make the feedback area visible so the user can see the message.
        feedbackDiv.style.display = 'block';

        // Check if the form is valid.
        if (isValid) {
            // If all checks passed, show a green success message.
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; 
            feedbackDiv.style.backgroundColor = '#d4edda'; // A light green background for success
        } else {
            // If any check failed, display the collected error messages in red.
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with line breaks.
            feedbackDiv.style.color = '#dc3545';
            feedbackDiv.style.backgroundColor = '#f8d7da'; // A light red background for errors
        }
    });
});