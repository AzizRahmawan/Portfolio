// Toggle & Responsive Navbar
const navSlide = () => {
    const burger = document.querySelector(".burger");
    const navLists = document.querySelector("nav");
    const wave = document.querySelector(".wave");
    const navLinks = document.querySelectorAll('nav a');

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