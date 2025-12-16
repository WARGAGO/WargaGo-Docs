// Smooth scroll for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// 3D Phone Mockup Tilt Effect
const phoneFrame = document.querySelector('.phone-frame');
const heroMockup = document.querySelector('.hero-mockup');

if (phoneFrame && heroMockup) {
    heroMockup.addEventListener('mousemove', (e) => {
        const rect = heroMockup.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = ((y - centerY) / centerY) * 10;
        const rotateY = ((centerX - x) / centerX) * 15;

        phoneFrame.style.transform = `
            rotateY(${-15 + rotateY}deg)
            rotateX(${5 + rotateX}deg)
            translateY(-10px)
        `;
    });

    heroMockup.addEventListener('mouseleave', () => {
        phoneFrame.style.transform = 'rotateY(-15deg) rotateX(5deg) translateY(0px)';
    });
}

// ...existing code...
