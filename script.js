/**
 * Cerrado Tecnologia — Script de Interatividade e Conversão B2B (2026)
 * Todos os comentários deste arquivo estão em português do Brasil.
 */

document.addEventListener('DOMContentLoaded', () => {

    // ==========================================================================
    // 1. MENU HAMBÚRGUER MOBILE E UX DE FECHAMENTO
    // ==========================================================================
    const menuToggle = document.querySelector('.mobile-menu-toggle');
    const navMenu = document.querySelector('.nav-menu');

    if (menuToggle && navMenu) {
        // Alternar abertura do menu
        menuToggle.addEventListener('click', (e) => {
            e.stopPropagation(); // Evita clique propagar para o document
            navMenu.classList.toggle('active');
            menuToggle.classList.toggle('active');
            toggleHamburgerIcon();
        });

        // Fechar menu mobile ao clicar fora dele
        document.addEventListener('click', (e) => {
            if (navMenu.classList.contains('active') && !navMenu.contains(e.target) && !menuToggle.contains(e.target)) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                toggleHamburgerIcon();
            }
        });

        // Fechar menu mobile ao pressionar a tecla ESC (acessibilidade)
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && navMenu.classList.contains('active')) {
                navMenu.classList.remove('active');
                menuToggle.classList.remove('active');
                toggleHamburgerIcon();
            }
        });

        // Função interna para animar as barras do menu hambúrguer
        function toggleHamburgerIcon() {
            const spans = menuToggle.querySelectorAll('span');
            if (menuToggle.classList.contains('active')) {
                spans[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
                spans[1].style.opacity = '0';
                spans[2].style.transform = 'rotate(-45deg) translate(6px, -6px)';
            } else {
                spans[0].style.transform = 'none';
                spans[1].style.opacity = '1';
                spans[2].style.transform = 'none';
            }
        }
    }

    // ==========================================================================
    // 2. CONTROLE DE PÁGINA ATIVA NO NAV-MENU
    // ==========================================================================
    const currentPath = window.location.pathname;
    const pageName = currentPath.substring(currentPath.lastIndexOf('/') + 1);
    const navLinks = document.querySelectorAll('.nav-menu a');

    navLinks.forEach(link => {
        const linkHref = link.getAttribute('href');
        
        // Verifica se a página atual condiz com o href (ou padrão inicial)
        if (pageName === linkHref || (pageName === '' && linkHref === 'index.html')) {
            link.classList.add('active');
        } else {
            link.classList.remove('active');
        }
    });

    // ==========================================================================
    // 3. EFEITO VISUAL DE SCROLL NO HEADER
    // ==========================================================================
    const header = document.querySelector('.main-header');
    if (header) {
        const handleScroll = () => {
            if (window.scrollY > 30) {
                header.style.boxShadow = '0 10px 40px rgba(0, 0, 0, 0.5)';
                header.style.backgroundColor = '#050608';
                header.style.height = '75px'; // Contrai sutilmente o menu ao rolar
                if (window.innerWidth > 768) {
                    document.querySelector('.header-container').style.height = '75px';
                }
            } else {
                header.style.boxShadow = 'none';
                header.style.backgroundColor = 'rgba(10, 11, 13, 0.85)';
                header.style.height = '85px';
                if (window.innerWidth > 768) {
                    document.querySelector('.header-container').style.height = '85px';
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        // Executa uma vez no início caso o usuário recarregue a página já rolada
        handleScroll();
    }

    // ==========================================================================
    // 4. PARSER DE QUERY STRINGS PARA PRÉ-PREENCHIMENTO INTELIGENTE (CONTATO.HTML)
    // ==========================================================================
    const formSegment = document.getElementById('segment');
    const formMessage = document.getElementById('message');

    if (formSegment || formMessage) {
        const urlParams = new URLSearchParams(window.location.search);
        
        const segmentoParam = urlParams.get('segmento');
        const solucaoParam = urlParams.get('solucao');

        // Pré-seleção pelo parâmetro "segmento"
        if (segmentoParam && formSegment) {
            const validSegments = ['postos', 'redes', 'gestores', 'hoteis', 'pousadas', 'resorts', 'clubes', 'parques'];
            if (validSegments.includes(segmentoParam)) {
                formSegment.value = segmentoParam;
            }
        }

        // Pré-preenchimento da mensagem pelo parâmetro "solucao"
        if (solucaoParam && formMessage) {
            const solucaoNomes = {
                'sgp': 'SGP Integrado',
                'automacao': 'Automação Comercial',
                'checkin': 'Check-in Digital',
                'acesso': 'Controle de Acesso',
                'ingressos': 'Venda Online de Ingressos',
                'dashboards': 'Dashboards Gerenciais'
            };
            
            if (solucaoNomes[solucaoParam]) {
                formMessage.value = `Gostaria de solicitar uma demonstração e saber mais detalhes sobre a solução de: ${solucaoNomes[solucaoParam]}.`;
                
                // Mapeia automaticamente a solução para o segmento mais provável
                if (formSegment) {
                    if (solucaoParam === 'sgp' || solucaoParam === 'automacao') {
                        formSegment.value = 'postos';
                    } else if (solucaoParam === 'checkin') {
                        formSegment.value = 'hoteis';
                    } else if (solucaoParam === 'ingressos') {
                        formSegment.value = 'parques';
                    }
                }
            }
        }
    }

    // ==========================================================================
    // 5. ENVIO DE CONTATOS E CONVERSÃO DINÂMICA VIA WHATSAPP
    // ==========================================================================
    const contactForm = document.getElementById('b2b-contact-form');
    const formSuccess = document.getElementById('form-success-state');

    if (contactForm && formSuccess) {
        contactForm.addEventListener('submit', (e) => {
            e.preventDefault(); // Cancela recarga nativa

            const name = document.getElementById('name').value.trim();
            const email = document.getElementById('email').value.trim();
            const phone = document.getElementById('phone').value.trim();
            const segmentSelect = document.getElementById('segment');
            const segmentText = segmentSelect.options[segmentSelect.selectedIndex].text;
            const messageVal = document.getElementById('message').value.trim();

            if (name && email && phone && messageVal) {
                // Número do WhatsApp comercial oficial da Cerrado Tech (Dossiê)
                const phoneWhatsApp = "5562992171070";
                
                // Formatação estruturada da mensagem comercial
                const waMessage = `Olá Cerrado Tech! Preenchi o formulário comercial do site.\n\n*Informações do Lead:*\n- Nome: ${name}\n- E-mail: ${email}\n- WhatsApp/Tel: ${phone}\n- Segmento: ${segmentText}\n- Desafio Operacional: ${messageVal}`;
                const encodedWaMessage = encodeURIComponent(waMessage);

                // Vincula o link personalizado ao botão do estado de sucesso
                const successWaBtn = document.getElementById('success-wa-btn');
                if (successWaBtn) {
                    successWaBtn.href = `https://wa.me/${phoneWhatsApp}?text=${encodedWaMessage}`;
                }

                // Ocultar formulário com fade e exibir estado de sucesso
                contactForm.classList.add('hidden');
                formSuccess.classList.remove('hidden');

                // Rolagem suave até a mensagem de sucesso
                formSuccess.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }
        });
    }

    // ==========================================================================
    // 6. EFEITO DE ENTRADA SUAVE (SCROLL REVEAL COM INTERSECTION OBSERVER)
    // ==========================================================================
    const revealOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const elementRevealObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('reveal-active');
                observer.unobserve(entry.target);
            }
        });
    }, revealOptions);

    const targetRevealElements = document.querySelectorAll('.b2b-card, .segment-card-b2b, .stat-item, .pillar-card, .timeline-item, .contact-info-card, .cta-block-section');
    
    targetRevealElements.forEach(element => {
        element.classList.add('reveal-hidden');
        elementRevealObserver.observe(element);
    });

    // Registra estilos de transição dinamizados no Head
    const styleSheet = document.createElement('style');
    styleSheet.innerHTML = `
        .reveal-hidden {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.7s cubic-bezier(0.25, 0.8, 0.25, 1), transform 0.7s cubic-bezier(0.25, 0.8, 0.25, 1);
        }
        .reveal-active {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    document.head.appendChild(styleSheet);
});
