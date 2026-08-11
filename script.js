/* ================= MOBILE NAVIGATION ================= */

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
    navLinks.classList.toggle("show");

    if (navLinks.classList.contains("show")) {
        menuToggle.textContent = "✕";
        menuToggle.setAttribute("aria-label", "Close menu");
    } else {
        menuToggle.textContent = "☰";
        menuToggle.setAttribute("aria-label", "Open menu");
    }
});


/* ================= CLOSE MOBILE MENU ================= */

const navigationLinks = document.querySelectorAll(".nav-links a");

navigationLinks.forEach((link) => {

    link.addEventListener("click", () => {

        navLinks.classList.remove("show");

        menuToggle.textContent = "☰";

        menuToggle.setAttribute("aria-label", "Open menu");
    });

});


/* ================= CURRENT YEAR ================= */

const currentYear = document.getElementById("currentYear");

currentYear.textContent = new Date().getFullYear();