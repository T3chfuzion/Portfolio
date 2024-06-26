document.querySelector('form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    // Basic form validation example
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();

    if (name === '' || email === '' || message === '') {
        alert('Please fill in all fields.');
    } else {
        // Form submission logic (e.g., send data to backend)
        alert('Form submitted successfully!');
        // Alternatively, use AJAX/fetch to send data to a server
    }
});
