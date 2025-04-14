document.getElementById("newsletterForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // Prevents default form submission (redirection to Formspree page)

    const form = e.target; // The form that was submitted
    const formData = new FormData(form); // Get form data
    const popup = document.getElementById("thankYouPopup");

    try {
        const response = await fetch("https://formspree.io/f/xanevgar", {
            method: "POST", // Sending a POST request to Formspree
            body: formData, // The form data
            headers: {
                Accept: "application/json" // Expecting a JSON response from Formspree
            }
        });

        if (response.ok) {
            popup.style.display = "block"; // Show the success message
            setTimeout(() => {
                popup.style.display = "none"; // Hide the success message after 3 seconds
            }, 3000);

            form.reset(); // Reset the form after submission
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please check your connection.");
    }
});