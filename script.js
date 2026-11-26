const menuToggle = document.querySelector('.menu-toggle');
const siteLinks = document.querySelector('#site-links');
const mobileLayout = window.matchMedia('(max-width: 720px)');

function setMenuOpen(open) {
    menuToggle.setAttribute('aria-expanded', String(open));
    siteLinks.hidden = mobileLayout.matches && !open;
}

function updateNavigation() {
    menuToggle.hidden = !mobileLayout.matches;
    setMenuOpen(false);
}

updateNavigation();
mobileLayout.addEventListener('change', updateNavigation);

menuToggle.addEventListener('click', () => {
    setMenuOpen(menuToggle.getAttribute('aria-expanded') === 'false');
});

siteLinks.addEventListener('click', (event) => {
    const link = event.target.closest('a');

    if (link && mobileLayout.matches) {
        setMenuOpen(false);
        document.querySelector(link.hash)?.focus({ preventScroll: true });
    }
});

menuToggle.closest('nav').addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menuToggle.getAttribute('aria-expanded') === 'true') {
        setMenuOpen(false);
        menuToggle.focus();
    }
});
