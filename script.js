document.addEventListener("DOMContentLoaded", () => {
    const contactBtn = document.getElementById("contactBtn");
    const popupForm = document.getElementById("popupForm");
    const closeBtn = document.getElementById("closeBtn");

    contactBtn.addEventListener("click", () => {
       popupForm.classList.add('active');
    });

    closeBtn.addEventListener("click", () => {
        popupForm.classList.remove('active');
    });

    window.addEventListener('load', () => {
        popupForm.classList.remove('active');
    });
});


const carousal = document.querySelector('.service-carousal');
const dots = document.querySelectorAll('.pagination-dot');
const images = carousal.querySelectorAll('img');
const totalImages = images.length;

let currentIndex = 0;

function updateDots(index) {
    dots.forEach(dot => dot.classList.remove('active'));
    dots[index].classList.add('active');
}

function scrollToIndex(index) {
    const gap = parseInt(getComputedStyle(carousal).gap * 10);
    const offset = index * (images[0].clientWidth + gap);
    carousal.scrollTo({
        left: offset,
        behavior: 'smooth'
    });
}

dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        scrollToIndex(index);
        updateDots(index);
        currentIndex = index;
    });
});

carousal.addEventListener('scroll', () => {
    const gap = parseInt(getComputedStyle(carousal).gap);
    const newIndex = Math.round(carousal.scrollLeft / (images[0].clientWidth + gap));
    if (newIndex !== currentIndex) {
        currentIndex = newIndex;
        updateDots(currentIndex);
    }
});

// Initialize the first dot as active
updateDots(0);
// Add this to your script.js

// Project Section 
// Select all child divs of project-desc
const projectDescItems = document.querySelectorAll('.project-desc-item');

// Select all images in project-image
const projectImages = document.querySelectorAll('.project-image img');

// Add click event listener to each project-desc-item
projectDescItems.forEach((item, index) => {
    item.addEventListener('click', () => {
        // Remove 'active' class from all project-desc-items
        projectDescItems.forEach(item => item.classList.remove('active'));

        // Add 'active' class to the clicked project-desc-item
        item.classList.add('active');

        // Hide all images
        projectImages.forEach(img => img.style.display = 'none');

        // Show the corresponding image based on the index of clicked item
        projectImages[index].style.display = 'block';
    });
});
