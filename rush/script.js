document.addEventListener("DOMContentLoaded", () => {
    console.log("Portfolio loaded successfully!");

    // 1. Mobile Navbar Auto-Collapse
    // When a user clicks a link on mobile, the menu should close automatically
    const navLinks = document.querySelectorAll('.nav-link');
    const menuToggle = document.getElementById('navbarNav');
    const bsCollapse = new bootstrap.Collapse(menuToggle, {toggle: false});

    navLinks.forEach((l) => {
        l.addEventListener('click', () => {
            // Check if the menu is actually open (collapsed class is missing when open)
            if (menuToggle.classList.contains('show')) {
                bsCollapse.toggle();
            }
        });
    });

    // 2. Simple Scroll Animation Trigger (Optional)
    // Adds a 'visible' class to elements when they scroll into view
    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('show');
            }
        });
    });

    // You can add the class 'hidden' to elements in HTML to use this
    const hiddenElements = document.querySelectorAll('.hidden');
    hiddenElements.forEach((el) => observer.observe(el));
});