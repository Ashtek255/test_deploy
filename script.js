const loginForm = document.getElementById('loginForm');
const errorMessage = document.getElementById('errorMessage');

loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent default form submission

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation (replace with your actual logic)
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields';
        errorMessage.style.display = 'block'; // Show error message
    } else {
        // Process login (e.g., send to server for authentication)
        // ...
        errorMessage.style.display = 'none'; // Hide error message if successful
    }
});
