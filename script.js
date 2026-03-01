// ============================
// Smooth Scroll برای منو
// ============================
document.querySelectorAll('header nav a').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    target.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  });
});

// ============================
// Fade-in on Scroll (Scroll Reveal)
// ============================
const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver(function(entries, observer){
  entries.forEach(entry => {
    if(!entry.isIntersecting) return;
    entry.classList.add('appear');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

// ============================
// Hero Button Hover Animation
// ============================
const heroBtn = document.querySelector('.hero a');
heroBtn.addEventListener('mouseenter', () => {
  heroBtn.style.transform = 'scale(1.05)';
  heroBtn.style.boxShadow = '0 20px 40px rgba(0,0,0,0.3)';
});
heroBtn.addEventListener('mouseleave', () => {
  heroBtn.style.transform = 'scale(1)';
  heroBtn.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
});

// ============================
// Simple Slider for Courses (Optional)
// ============================
let currentSlide = 0;
const slides = document.querySelectorAll('#courses .grid div');

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.style.display = i === index ? 'block' : 'none';
    slide.style.opacity = 0;
    if(i === index) {
      setTimeout(() => slide.style.opacity = 1, 100);
    }
  });
}

// Auto-slide every 4 seconds
if(slides.length > 0) {
  showSlide(currentSlide);
  setInterval(() => {
    currentSlide = (currentSlide + 1) % slides.length;
    showSlide(currentSlide);
  }, 4000);
}

// ============================
// Floating Effect for Hero Text (Subtle)
// ============================
const heroText = document.querySelector('.hero div');
let yOffset = 0;
setInterval(() => {
  yOffset = yOffset === 0 ? 5 : 0;
  heroText.style.transform = `translateY(${yOffset}px)`;
}, 2000);

// ============================
// Contact Form Submission (Fake Demo)
// ============================
const contactForm = document.querySelector('#contact form');
contactForm.addEventListener('submit', function(e) {
  e.preventDefault();
  alert("پیام شما با موفقیت ارسال شد! 🎉");
  contactForm.reset();
});