document.querySelectorAll('.accordion-header').forEach(header => {
    header.addEventListener('click', () => {
        const panel = header.nextElementSibling;
        header.classList.toggle('active');

        if (panel.style.display === 'block') {
            panel.style.display = 'none';
        } else {
            panel.style.display = 'block';
        }
    });
});

