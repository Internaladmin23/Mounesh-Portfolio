document.getElementById("newsletterForm").addEventListener("submit", async function(e) {
    e.preventDefault(); // prevent default form submission

    const form = e.target;
    const formData = new FormData(form);
    const popup = document.getElementById("thankYouPopup");

    try {
        const response = await fetch("https://formspree.io/f/xanevgar", {
            method: "POST",
            body: formData,
            headers: {
                Accept: "application/json"
            }
        });

        if (response.ok) {
            popup.style.display = "block";
            setTimeout(() => {
                popup.style.display = "none";
            }, 3000);

            form.reset(); // clear the input field
        } else {
            alert("Something went wrong. Please try again.");
        }
    } catch (error) {
        console.error("Error submitting form:", error);
        alert("Error submitting form. Please check your connection.");
    }
});