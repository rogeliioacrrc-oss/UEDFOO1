document.addEventListener('DOMContentLoaded', () => {
    // 1. Inicializa AOS (Animate On Scroll)
    AOS.init({
        duration: 1000,
        once: true,
    });

    // 2. Controla el botón "Scroll to Top" (flecha)
    const scrollTopButton = document.getElementById('scrollTopButton');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = 'block';
            setTimeout(() => {
                scrollTopButton.style.opacity = '1';
            }, 50);
        } else {
            scrollTopButton.style.opacity = '0';
            setTimeout(() => {
                scrollTopButton.style.display = 'none';
            }, 300); 
        }
    });

    // 3. Controla el desplazamiento suave al hacer clic
    scrollTopButton.addEventListener('click', (e) => {
        e.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // 4. Implementación para cerrar el navbar después de un clic en móviles (Bootstrap)
    const navLinks = document.querySelectorAll('.nav-link');
    const navbarCollapse = document.getElementById('mainNavbar');

    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navbarCollapse.classList.contains('show')) {
                // Se asegura de que solo se cierre si se hace clic en un enlace NO desplegable
                if (!link.classList.contains('dropdown-toggle')) {
                    const bsCollapse = new bootstrap.Collapse(navbarCollapse, {
                        toggle: false
                    });
                    bsCollapse.hide();
                }
            }
        });
    });

});