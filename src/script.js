
// Hamburger menu for the smaller screens
function toggleMenu() {
    const mobileMenu = document.querySelector(".mobile-menu");
    mobileMenu.classList.toggle("show");
}

// Smooth scrolling

const backToTopButton = document.getElementById("backToTopButton");

//show or hide the button depending on the scroll position
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        // Show the button if scrolled down 100px or more
        backToTopButton.style.display = "block";
    } else {
        // Hide the button if scrolled up less than 100px
        backToTopButton.style.display = "none";
    }
};

// Scroll to the top of the page when the button is clicked
backToTopButton.onclick = function () {
    document.body.scrollTo({ top: 0, behavior: "smooth" });
}
