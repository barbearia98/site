const menuToggle = document.getElementById('menu-toggle');
const mobileMenu = document.getElementById('mobile-menu');

menuToggle.addEventListener('click', function () {
    mobileMenu.classList.toggle('show');
});

const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');

navLinks.forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {

            mobileMenu.classList.remove('show');

            window.scrollTo({
                top: targetElement.offsetTop - 76,
                behavior: 'smooth'
            });
        }
    });
});

function updateActiveNav() {
    const sections = document.querySelectorAll('section');
    const scrollPosition = window.scrollY + 150;

    const isAtBottom = window.innerHeight + window.pageYOffset >= document.body.offsetHeight - 100;

    if (isAtBottom) {

        const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
        navLinks.forEach(link => {
            link.classList.remove('active-nav');
        });

        const locationLinks = document.querySelectorAll('.nav-link[href="#localizacao"], .mobile-nav-link[href="#localizacao"]');
        locationLinks.forEach(link => {
            link.classList.add('active-nav');
        });
        return;
    }

    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');

        if (
            scrollPosition >= sectionTop &&
            scrollPosition < sectionTop + sectionHeight
        ) {

            const navLinks = document.querySelectorAll('.nav-link, .mobile-nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active-nav');
            });


            const activeLinks = document.querySelectorAll(`.nav-link[href="#${sectionId}"], .mobile-nav-link[href="#${sectionId}"]`);
            activeLinks.forEach(link => {
                link.classList.add('active-nav');
            });
        }
    });
}

window.addEventListener('scroll', updateActiveNav);

updateActiveNav();