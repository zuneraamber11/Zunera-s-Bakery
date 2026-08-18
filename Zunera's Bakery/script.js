
/* ZUNERA'S BAKERY - JAVASCRIPT */

/* ---------- HOME PAGE SLIDER ---------- */

let slides = document.querySelectorAll(".slide");
let current = 0;

function showSlide(n) {
    if (!slides.length) return;

    slides[current].classList.remove("active");
    current = (n + slides.length) % slides.length;
    slides[current].classList.add("active");
}

function changeSlide(n) {
    showSlide(current + n);
}

/* Automatically change slides every 4 seconds */
if (slides.length) {
    setInterval(() => showSlide(current + 1), 4000);
}


/* ---------- CONTACT FORM ---------- */

let form = document.querySelector(".contact-form form");

if (form) {
    form.addEventListener("submit", function(e) {
        e.preventDefault();
        alert("Thank you for contacting Zunera's Bakery! ❤️");
        form.reset();
    });
}

