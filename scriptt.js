document.addEventListener("DOMContentLoaded", () => {
    const toggleButton = document.getElementById("dark-mode-toggle");
    const body = document.body;

    // Check for saved user preference
    if (localStorage.getItem("darkMode") === "false") {
        body.classList.add("light-mode");
        toggleButton.textContent = "☀️";
    }

    toggleButton.addEventListener("click", () => {
        if (body.classList.contains("light-mode")) {
            body.classList.remove("light-mode");
            localStorage.setItem("darkMode", "true");
            toggleButton.textContent = "🌙";
        } else {
            body.classList.add("light-mode");
            localStorage.setItem("darkMode", "false");
            toggleButton.textContent = "☀️";
        }
    });
});
