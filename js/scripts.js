document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
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

const themeToggle = document.getElementById('themeToggle');

themeToggle.addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
});

document.addEventListener("DOMContentLoaded", function() {
    var buttons = document.querySelectorAll('button[data-href]');

    buttons.forEach(function(button) {
        button.addEventListener('click', function() {
            window.location.href = button.getAttribute('data-href');
        });
    });
});
