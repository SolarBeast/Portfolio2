// Typing effect for the Hero section
const text = document.querySelector('.typing-text');
const phrase = "Aspiring Cyber Security Professional | B.Tech CSE (DFCS)";
let i = 0;

function type() {
    if (i < phrase.length) {
        text.innerHTML += phrase.charAt(i);
        i++;
        setTimeout(type, 50);
    }
}

// Interactive Scroll Reveal
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        const top = section.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            section.style.opacity = "1";
            section.style.transform = "translateY(0)";
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', () => {
    type();
    // Fade in sections
    document.querySelectorAll('section').forEach(s => {
        s.style.opacity = "0";
        s.style.transform = "translateY(20px)";
        s.style.transition = "all 0.6s ease-out";
    });
});