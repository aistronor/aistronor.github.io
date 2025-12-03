document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger-menu');
    const sidebar = document.getElementById('sidebar');
    const closeBtn = document.querySelector('.closebtn');

    // Toggle menu on hamburger click
    if (hamburger && sidebar) {
        hamburger.addEventListener('click', (e) => {
            e.stopPropagation();
            sidebar.classList.toggle('open');
        });
    }

    // Close menu on close button click
    if (closeBtn && sidebar) {
        closeBtn.addEventListener('click', (e) => {
            e.preventDefault();
            sidebar.classList.remove('open');
        });
    }

    // Close menu when clicking outside
    document.addEventListener('click', (event) => {
        if (sidebar && sidebar.classList.contains('open')) {
            if (!sidebar.contains(event.target) && !hamburger.contains(event.target)) {
                sidebar.classList.remove('open');
            }
        }
    });
});
