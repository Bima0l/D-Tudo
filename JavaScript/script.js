document.addEventListener("DOMContentLoaded", () => {
    const mobileMenuButton = document.getElementById("mobile-menu");
    const navbar = document.querySelector(".navbar ul");

    mobileMenuButton.addEventListener("click", () => {
        navbar.classList.toggle("active");
        mobileMenuButton.classList.toggle("active");
    });
});
