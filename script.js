//Popup form in Hero section
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


// Carousal Of Images

const container = document.querySelector('.service-carousal');
const images = document.querySelectorAll('.image-container');
const paginationDots = document.querySelectorAll('.pagination-dot');

const containerWidth = container.offsetWidth;
const imageWidth = images[0].offsetWidth;
const numImages = images.length;
const numDots = paginationDots.length;

let currentIndex = 0;

container.addEventListener('scroll', () => {
    const scrollPosition = container.scrollLeft;
    const index = Math.floor(scrollPosition / imageWidth*2);
    
    if (currentIndex !== index) {
        currentIndex = index;
        updatePaginationDots();
    }
});

function updatePaginationDots() {
    paginationDots.forEach(dot => dot.classList.remove('active'));
    paginationDots[currentIndex % numDots].classList.add('active');
}
updatePaginationDots();


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
