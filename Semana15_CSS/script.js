// --- Navbar dinámico ---
const navbar = document.querySelector("nav");

window.addEventListener("scroll", () => {
    if (window.scrollY > 20) {
        navbar.classList.add("shadow-lg");
    } else {
        navbar.classList.remove("shadow-lg");
    }
});

// --- Validación simple de formulario ---
const form = document.querySelector("form");
const inputs = form.querySelectorAll("input, textarea");

form.addEventListener("submit", (e) => {
    let valid = true;

    inputs.forEach(input => {
        if (!input.value.trim()) {
            input.classList.add("border-red-500");
            valid = false;
        } else {
            input.classList.remove("border-red-500");
        }
    });

    if (!valid) {
        e.preventDefault();
        alert("Por favor completa todos los campos correctamente.");
    }
});

// --- Smooth scroll con compensación por navbar ---
document.querySelectorAll("nav a").forEach(link => {
    link.addEventListener("click", function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute("href"));

        window.scrollTo({
            top: target.offsetTop - 80,
            behavior: "smooth"
        });
    });
});
