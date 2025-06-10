// Wait for the entire HTML page to load before running the script.
document.addEventListener('DOMContentLoaded', () => {

    // Select the form and the feedback display area by their IDs.
    const form = document.getElementById('registration-form');
    const feedbackDiv = document.getElementById('form-feedback');

    // Listen for the form's 'submit' event.
    form.addEventListener('submit', (event) => {
        // Stop the form from submitting the traditional way (which reloads the page).
        event.preventDefault();

        // Get the user's input and remove any extra whitespace from the ends.
        const username = document.getElementById('username').value.trim();
        const email = document.getElementById('email').value.trim();
        const password = document.getElementById('password').value.trim();

        // Prepare for validation.
        let isValid = true;       // A flag to track if all checks pass.
        const messages = [];      // A list to hold any error messages.

        // --- VALIDATION CHECKS ---

        // 1. Check if the username is at least 3 characters long.
        if (username.length < 3) {
            isValid = false;
            messages.push('Username must be at least 3 characters long.');
        }

        // 2. Check if the email contains '@' and '.' characters.
        if (!email.includes('@') || !email.includes('.')) {
            isValid = false;
            messages.push('Please enter a valid email address.');
        }

        // 3. Check if the password is at least 8 characters long.
        if (password.length < 8) {
            isValid = false;
            messages.push('Password must be at least 8 characters long.');
        }

        // --- DISPLAY FEEDBACK ---

        // Make the feedback area visible.
        feedbackDiv.style.display = 'block';

        if (isValid) {
            // If all checks passed, show a success message.
            feedbackDiv.textContent = 'Registration successful!';
            feedbackDiv.style.color = '#28a745'; // Green text
            feedbackDiv.style.backgroundColor = '#d4edda'; // Light green background
        } else {
            // If any check failed, display the collected error messages.
            feedbackDiv.innerHTML = messages.join('<br>'); // Join messages with line breaks.
            feedbackDiv.style.color = '#dc3545'; // Red text
            feedbackDiv.style.backgroundColor = '#f8d7da'; // Light red background
        }
    });
});