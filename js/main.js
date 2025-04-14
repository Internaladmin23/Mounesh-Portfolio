const toggleBtn = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

toggleBtn.addEventListener("click", () => {
    navMenu.classList.toggle("open");
    toggleBtn.innerHTML = navMenu.classList.contains("open") ?
        '<i class="fas fa-times"></i>' :
        '<i class="fas fa-bars"></i>';
});



const form = document.getElementById('contactForm');
const status = document.getElementById('form-status');
const emojiContainer = document.getElementById('emoji-container');
const emojis = ["🎉", "✨", "💌", "🎊", "❤️", "🌟", "💖", "💫", "🌈", "🎁"];

function launchEmojis(count = 20) {
    for (let i = 0; i < count; i++) {
        const emoji = document.createElement("span");
        emoji.className = "emoji";
        emoji.textContent = emojis[Math.floor(Math.random() * emojis.length)];
        emoji.style.left = Math.random() * 100 + "vw";
        emoji.style.bottom = "0px";
        emoji.style.animationDuration = (1.5 + Math.random()).toFixed(2) + "s";
        emojiContainer.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 3000);
    }
}

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const data = new FormData(form);

    fetch("https://formspree.io/f/xanevgar", {
        method: "POST",
        body: data,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            status.textContent = "✅ Thanks! Your message has been sent.";
            form.reset();
            launchEmojis(); // Trigger emoji animation
        } else {
            response.json().then(data => {
                if (data.errors) {
                    status.textContent = "❌ " + data.errors.map(error => error.message).join(", ");
                } else {
                    status.textContent = "❌ Oops! Something went wrong.";
                }
            });
        }
    }).catch(() => {
        status.textContent = "❌ Oops! Something went wrong.";
    });
});