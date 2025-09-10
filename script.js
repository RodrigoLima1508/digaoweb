document.addEventListener('DOMContentLoaded', () => {

    // --- Bloco 1: Menu Mobile (Hambúrguer) ---
    const menuToggle = document.querySelector('.menu-toggle');
    const navMenu = document.querySelector('.nav-menu');
    if (menuToggle && navMenu) {
        const navLinks = navMenu.querySelectorAll('.nav-link');

        menuToggle.addEventListener('click', () => {
            navMenu.classList.toggle('active');
            const icon = menuToggle.querySelector('i');
            icon.classList.toggle('fa-bars');
            icon.classList.toggle('fa-times');
        });

        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                if (navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const icon = menuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            });
        });
    }

    // --- Bloco 2: Botão "Voltar ao Topo" ---
    const voltarTopoBtn = document.getElementById('voltarTopo');
    if (voltarTopoBtn) {
        window.onscroll = () => {
            if (document.body.scrollTop > 300 || document.documentElement.scrollTop > 300) {
                voltarTopoBtn.style.display = 'block';
            } else {
                voltarTopoBtn.style.display = 'none';
            }
        };

        voltarTopoBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // --- Bloco 3: Marcar link de navegação ativo ao rolar ---
    const sections = document.querySelectorAll('section[id]');
    const menuNavLinks = document.querySelectorAll('.nav-menu a.nav-link');
    if (sections.length > 0 && menuNavLinks.length > 0) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    menuNavLinks.forEach(link => {
                        link.classList.remove('active');
                        if (link.getAttribute('href').substring(1) === entry.target.id) {
                            link.classList.add('active');
                        }
                    });
                }
            });
        }, { rootMargin: '-50% 0px -50% 0px' });

        sections.forEach(section => {
            observer.observe(section);
        });
    }

});