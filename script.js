// Script JavaScript - G&A Planejados

document.addEventListener('DOMContentLoaded', function() {

    // Navbar scroll effect
    const navbar = document.getElementById('navbar');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 80) {
            navbar.classList.add('nav-scrolled');
        } else {
            navbar.classList.remove('nav-scrolled');
        }
    });

    // Form submission
    const contactForm = document.getElementById('contactForm');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            alert("✅ Mensagem enviada com sucesso!\n\nNossa equipe entrará em contato em breve.");
            this.reset();
        });
    }

    // Budget button
    window.abrirOrcamento = function() {
        alert("🎉 Orçamento Grátis!\n\nPreencha o formulário de contato ou nos chame no WhatsApp.");
        document.getElementById('contato').scrollIntoView({ 
            behavior: 'smooth' 
        });
    };

    // Smooth scrolling for all anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            
            if (targetElement) {
                e.preventDefault();
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });

    console.log('%c✅ Site G&A Planejados carregado com sucesso!', 'color: #1e40af; font-size: 14px; font-weight: bold');
});