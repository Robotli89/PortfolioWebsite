// Smooth scrolling for internal anchor links if the target exists
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});



document.querySelectorAll('.work-item img').forEach(img => {
    img.addEventListener('click', function() {
        const overlay = document.createElement('div');
        overlay.style.position = 'fixed';
        overlay.style.top = '0';
        overlay.style.left = '0';
        overlay.style.width = '100vw';
        overlay.style.height = '100vh';
        overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.8)';
        overlay.style.display = 'flex';
        overlay.style.justifyContent = 'center';
        overlay.style.alignItems = 'center';
        overlay.style.cursor = 'pointer';

        const enlargedImg = document.createElement('img');
        enlargedImg.src = this.src;
        enlargedImg.style.maxWidth = '80%';
        enlargedImg.style.maxHeight = '80%';
        overlay.appendChild(enlargedImg);

        overlay.addEventListener('click', function() {
            document.body.removeChild(overlay);
        });

        document.body.appendChild(overlay);
    });
});

// Theme toggling with preference stored in localStorage
const themeToggle = document.getElementById('themeToggle');
if (themeToggle) {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark') {
        document.body.classList.add('dark-theme');
    }

    themeToggle.addEventListener('click', function() {
        document.body.classList.toggle('dark-theme');
        const isDark = document.body.classList.contains('dark-theme');
        localStorage.setItem('theme', isDark ? 'dark' : 'light');
    });
}

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('button[data-href]');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = button.getAttribute('data-href');
        });
    });
});
