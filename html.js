// Smooth scroll and active link highlight on scroll
const navLinks = document.querySelectorAll('nav ul li a');

function onScroll() {
    const scrollPos = window.scrollY || window.pageYOffset;
    navLinks.forEach(link => {
        const section = document.querySelector(link.hash);
        if (!section) return;
        const top = section.offsetTop - 110; // header height + padding
        const bottom = top + section.offsetHeight;
        if (scrollPos >= top && scrollPos < bottom) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });
}
window.addEventListener('scroll', onScroll);

// Zoom feature for gallery images
const zoomOverlay = document.getElementById('zoomOverlay');
const zoomImage = zoomOverlay.querySelector('img');
const closeBtn = zoomOverlay.querySelector('.closeBtn');
const dressImages = document.querySelectorAll('#gallery .dress-card img');

dressImages.forEach(img => {
    img.style.cursor = 'zoom-in';
    img.addEventListener('click', () => {
        openZoom(img);
    });
    img.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            openZoom(img);
        }
    });
    img.setAttribute('tabindex', '0');
    img.setAttribute('aria-label', img.alt + ' - Click to zoom');
});

function openZoom(img) {
    zoomOverlay.classList.add('active');
    zoomImage.src = img.src;
    zoomImage.alt = img.alt;
    zoomOverlay.focus();
    document.body.style.overflow = 'hidden'; // disable background scroll
}

function closeZoom() {
    zoomOverlay.classList.remove('active');
    zoomImage.src = '';
    zoomImage.alt = '';
    document.body.style.overflow = ''; // enable scroll
}

closeBtn.addEventListener('click', closeZoom);

zoomOverlay.addEventListener('click', e => {
    if (e.target === zoomOverlay) {
        closeZoom();
    }
});

window.addEventListener('keydown', e => {
    if (e.key === 'Escape' && zoomOverlay.classList.contains('active')) {
        closeZoom();
    }
});

document.addEventListener("DOMContentLoaded", function () {
  const toggle = document.getElementById("menu-toggle");
  const navMenu = document.getElementById("nav-menu");

  toggle.addEventListener("click", () => {
    navMenu.classList.toggle("active");
  });
});