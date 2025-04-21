// Smooth scroll behavior for nav links
document.querySelectorAll('nav a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Alert when social media links are clicked
document.querySelectorAll('a[target="_blank"]').forEach(link => {
    if (link.href.includes("instagram.com") || link.href.includes("canva.com")) {
        link.addEventListener('click', () => {
            alert("You are now leaving the site to view Arlyn's work on another platform!");
        });
    }
});

// Console greeting
console.log("Welcome to Arlyn Mae's Portfolio!");


// Get the button
const backToTopButton = document.getElementById("backToTop");

// Show the button when the user scrolls down 100px from the top of the document
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
backToTopButton.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Smooth scroll effect
    });
};
