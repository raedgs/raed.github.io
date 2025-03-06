document.addEventListener("DOMContentLoaded", function() {
    setTimeout(function() {
        document.getElementById("preloader").style.display = "none";
        document.getElementById("content").classList.remove("hidden");
    }, 3000); // 3 seconds delay before showing content
});
