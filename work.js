const hiddenLinks = document.querySelector('.hidden_lines');
const navLinks = document.querySelector('.nav_links');
let menuOpen = false;

hiddenLinks.addEventListener('click', () => {
    if(menuOpen ==false) {
        navLinks.style.display = "block";
        menuOpen = true;
    }
    else if (menuOpen == true) {
        navLinks.style.display = "none";
        menuOpen = false;
    }
});

window.addEventListener('resize', () => {
    if (window.innerWidth > 768) {
        navLinks.style.display = "flex"; // Always show menu on desktop
        menuOpen = false; // Reset the state
    } else {
        navLinks.style.display = menuOpen ? "block" : "none"; // Show or hide based on toggle
    }
});

const hero = document.querySelector('.hero');
    const bgImages = [
        'Rotate1.jpg',
        'Rotate2NewNew.jpg',
        'Rotate3New.jpg'
    ];
    let index = 0;

    function rotateBackground() {
        index = (index + 1) % bgImages.length;
        hero.style.backgroundImage = `url('${bgImages[index]}')`;
    }

    // Set initial image
    hero.style.backgroundImage = `url('${bgImages[0]}')`;

    // Start the rotation every 7 seconds
    setInterval(rotateBackground, 7000);
const logo = document.getElementById('logo');

// Add a click event listener to the logo
logo.addEventListener('click', function() {
    window.location.href = 'index.html'; // Redirect to the homepage
});

const allNavItems = document.querySelectorAll('.nav_links a'); // Select all <a> inside .nav_links

allNavItems.forEach(link => {
    link.addEventListener('click', () => {
        if (window.innerWidth <= 768) { // Only apply on mobile
            navLinks.style.display = "none"; // Hide the menu
            menuOpen = false; // Reset the toggle
        }
    });
});