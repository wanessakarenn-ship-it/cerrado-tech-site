# Protótipo de Alta Fidelidade do Novo Site Cerrado Tech

Este plano define a criação de um protótipo de alta fidelidade para o novo site da **Cerrado Tech**. Com base nas especificações do reposicionamento estratégico e conceito visual, mudaremos de um formato claro e estático para um design premium, escuro (dark mode), com detalhes em laranja âmbar e micro-animações dinâmicas.

O protótipo será construído em HTML5, CSS3 moderno (Vanilla CSS) e JavaScript interativo (Vanilla JS), organizado para rodar localmente de forma fluida e responsiva.

## User Review Required

> [!IMPORTANT]
> **Paleta de Cores e Estética Premium:**
> Utilizaremos um fundo preto-grafite profundo (`#0B0C10` a `#1F2833`) combinado com um laranja Cerrado / âmbar tecnológico com efeito de brilho/neon (`#FF6600` / `#FF8C00`). Detalhes em vidro reflexivo (glassmorphism) serão aplicados a cards e menus.
>
> **Estrutura de Interação:**
> As seções de "Quem Atendemos" (Segmentos) e "Soluções" serão totalmente interativas no protótipo, permitindo que o usuário clique e visualize em tempo real a dor operacional, o impacto negativo e a solução oferecida para cada um dos 8 públicos-alvo, além de detalhes adicionais das 10 soluções do portfólio.

## Open Questions

> [!WARNING]
> 1. **Estrutura de Arquivos:** Recomendamos criar o protótipo como uma Single Page Application (SPA) com navegação suave entre âncoras (`#inicio`, `#solucoes`, `#segmentos`, `#sobre`, `#contato`) e popups/modais interativos para detalhar as soluções. Você prefere este modelo SPA interativo ou prefere que criemos múltiplos arquivos HTML físicos (ex: `index.html`, `solucoes.html`, `empresa.html`, `contato.html`)?
>
> 2. **Local dos Arquivos:** A pasta `Protótipo de baixa fidelidade` no seu computador está vazia. Deseja que coloquemos o protótipo interativo dentro dela, ou prefere colocarmos diretamente na pasta raiz do projeto `Cerrado Tech`?
>
> 3. **Logotipos e Imagens:** Usaremos imagens SVGs dinâmicas inline criadas especialmente para representar os ícones de postos, hotéis, parques aquáticos, etc. Se você possuir imagens oficiais, podemos integrá-las posteriormente. Deseja que criemos ilustrações vetoriais modernas para esta versão?

---

## Proposed Changes

### Protótipo de Alta Fidelidade

Criação dos arquivos principais do protótipo dentro da pasta de protótipo.

#### [NEW] [index.html](file:///c:/Users/Casa/OneDrive%20-%20Uniasselvi/Área%20de%20Trabalho/Cerrado%20Tech/Protótipo%20de%20baixa%20fidelidade/index.html)
- Estrutura semântica HTML5.
- Menu de navegação fixo (header premium) com logotipo em SVG.
- Seção Hero com chamadas de alto impacto ("Tecnologia para operações que não podem parar") e efeitos de iluminação âmbar.
- Seção de Impacto: "Sua equipe ainda repete processos manuais todos os dias?" com comparativos dinâmicos.
- Seção Interativa "Quem Atendemos": abas/cards dinâmicos para alternar entre Postos, Redes, Gestores, Hotéis, Pousadas, Resorts, Clubes e Parques Aquáticos.
- Grid de "Soluções": 10 cards com glassmorphism e efeitos hover para detalhar SGP Integrado, Automação, Check-in Digital, Controle de Acesso, etc.
- Seção "Sobre a Cerrado Tecnologia" destacando os +30 anos de história (desde 1994) e a autoridade técnica.
- Formulário de Diagnóstico Gratuito: formulário inteligente com campos validados e seleção de segmento.
- Rodapé atualizado para 2026 com dados de contato consolidados.

#### [NEW] [styles.css](file:///c:/Users/Casa/OneDrive%20-%20Uniasselvi/Área%20de%20Trabalho/Cerrado%20Tech/Protótipo%20de%20baixa%20fidelidade/styles.css)
- Definição de variáveis CSS (tokens de design) para a paleta escura e âmbar.
- Uso da fonte moderna 'Outfit' ou 'Inter' via Google Fonts.
- Estilização premium com efeitos de glow, sombras de caixa dinâmicas, glassmorphism (`backdrop-filter`) e bordas ultra-finas.
- Animações CSS para transições suaves (`transition`, `@keyframes`) no carregamento das seções e interações do menu/botões.
- Layout totalmente responsivo com CSS Grid e Flexbox, otimizado para celulares e desktops.

#### [NEW] [script.js](file:///c:/Users/Casa/OneDrive%20-%20Uniasselvi/Área%20de%20Trabalho/Cerrado%20Tech/Protótipo%20de%20baixa%20fidelidade/script.js)
- Controle do menu mobile responsivo.
- Lógica para alternar seções de segmentos de forma dinâmica (mostrando dor operacional e solução específica de acordo com o segmento selecionado).
- Efeitos de revelação de elementos ao rolar a página (Scroll Reveal simples).
- Validação e simulação de envio do formulário de diagnóstico com feedback visual de sucesso.
- Integração dinâmica para clique em botões de WhatsApp com mensagens pré-definidas com base no contexto do usuário.

---

## Verification Plan

### Manual Verification
1. Abrir o arquivo `index.html` em navegadores populares (Chrome, Edge, Firefox) para validar a renderização visual e a responsividade.
2. Testar todos os links de ancoragem do menu para garantir o comportamento de rolagem suave (smooth scroll).
3. Testar a interatividade da seção "Quem Atendemos" clicando em cada um dos segmentos e confirmando que o conteúdo (dor, impacto e solução) é atualizado corretamente.
4. Preencher o formulário de diagnóstico e validar se o fluxo de envio e validação funciona perfeitamente, exibindo a tela de sucesso.
5. Clicar nos botões de WhatsApp para validar se a mensagem gerada corresponde ao público-alvo selecionado.
