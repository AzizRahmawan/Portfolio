// Toggle & Responsive Navbar
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
    const navLinks = document.querySelectorAll('nav a');
    const wave = document.querySelector(".wave");

    burger.addEventListener("click", () => {
        if (wave && !wave.classList.contains("nav-active")) {
            navLists.classList.toggle("nav-active");
            burger.classList.toggle("toggle-burger");
        }
    });

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            // Tutup nav dan burger
            navLists.classList.remove('nav-active');
            burger.classList.remove('toggle-burger');
        });
    });
}

navSlide();

// Clear Form
window.onbeforeunload = () => {
    for (const form of document.getElementsByTagName("form")){
        form.reset();
    }
}