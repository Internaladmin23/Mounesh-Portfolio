// Get form and status message element
const form = document.getElementById('sessionForm');
const statusMessage = document.getElementById('form-status');

form.addEventListener('submit', function(e) {
    e.preventDefault(); // Stop default form submission

    const formData = new FormData(form);

    // Send the form data to Formspree
    fetch("https://formspree.io/f/xanevgar", {
            method: "POST",
            body: formData,
            headers: {
                'Accept': 'application/json'
            }
        })
        .then(response => {
            if (response.ok) {
                // Update text on successful form submission
                statusMessage.textContent = "✅ Session Requested! We'll get in touch with you soon.";
                statusMessage.style.color = 'green'; // Change text color to green
                form.reset(); // Reset the form fields
            } else {
                // Handle error if form submission failed
                statusMessage.textContent = "❌ Oops! Something went wrong. Please try again.";
                statusMessage.style.color = 'red'; // Change text color to red
            }
        })
        .catch(() => {
            statusMessage.textContent = "❌ Oops! Something went wrong. Please try again.";
            statusMessage.style.color = 'red'; // Change text color to red
        });
});