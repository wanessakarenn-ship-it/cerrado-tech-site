# Cerrado Tecnologia — Site Institucional B2B

![HTML5](https://img.shields.io/badge/HTML5-E34F26?style=for-the-badge&logo=html5&logoColor=white)
![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black)
![GitHub Pages](https://img.shields.io/badge/GitHub%20Pages-222222?style=for-the-badge&logo=github&logoColor=white)

Este repositório contém o novo site institucional e comercial da **Cerrado Tecnologia**, desenvolvido sob uma arquitetura multitemática profissional B2B. A plataforma foi projetada para refletir o reposicionamento estratégico da empresa, expandindo sua imagem de especialista em postos de combustíveis para provedora líder de tecnologia, automação e gestão integrada em múltiplos mercados de alto fluxo (hotelaria, lazer e entretenimento).

---

## 🚀 Link de Acesso Público

O site está publicado e totalmente funcional no GitHub Pages:
🔗 **[https://wanessakarenn-ship-it.github.io/cerrado-tech-site/](https://wanessakarenn-ship-it.github.io/cerrado-tech-site/)**

---

## 📂 Organização do Projeto

O repositório está estruturado de forma limpa e profissional, separando a documentação estratégica dos códigos de produção:

```text
cerrado-tech-site/
├── database/                              # Estrutura do Banco de Dados Relacional
│   └── schema.sql                         # Script DDL e DML inicial para PostgreSQL
├── docs/                                  # Documentos de planejamento e materiais de identidade
│   ├── Conceito visual.docx
│   ├── Documentacao_Cerrado_Tech_Segmentos_Atualizada.pdf
│   ├── Dossie_Completo_Cerrado_Tech.docx
│   ├── Materiais que vamos precisar para montar o site.docx
│   ├── Plano de implementação.md
│   └── Público-Alvo da Cerrado Tech.pdf
├── index.html                             # Página Inicial (Home B2B)
├── solucoes.html                          # Página de detalhamento das Soluções
├── segmentos.html                         # Página de detalhamento dos Segmentos
├── sobre.html                             # Página institucional com história e Linha do Tempo
├── contato.html                           # Central de Atendimento e Formulário
├── styles.css                             # Folha de estilos unificada (Clean Tech Dark)
├── script.js                              # Lógica de controle e conversão (WhatsApp dinâmico)
└── .gitignore                             # Regras de exclusão do Git
```

---

## 🛠️ Tecnologias Utilizadas

Para garantir performance máxima, compatibilidade imediata e carregamento instantâneo, o projeto foi desenvolvido com tecnologias nativas puras (sem dependências de frameworks pesados):

- **Estruturação:** HTML5 Semântico para SEO aprimorado.
- **Estilização:** CSS3 Moderno (Vanilla CSS) utilizando variáveis dinâmicas, Grid, Flexbox e efeitos de *glassmorphism* (efeito vidro fosco).
- **Comportamento:** JavaScript Puro (Vanilla JS) com controle do menu mobile, Intersection Observer para animações de rolagem e gerador dinâmico de conversões.
- **Tipografia:** Fontes de alto padrão visual do Google Fonts (*Inter* e *Outfit*).

---

## 🌟 Recursos de Destaque

1. **Design Clean B2B Premium:** Fundo grafite profundo com realces sutis em laranja Cerrado/âmbar tecnológico e amplos respiros visuais.
2. **Navegação Multitemática:** Arquitetura estruturada com 5 páginas físicas independentes que compartilham o mesmo padrão profissional de cabeçalho e rodapé.
3. **Placeholders Estratégicos:** Substituição de ícones físicos pesados por blocos vetoriais e caixas de visualização em aberto, permitindo flexibilidade futura de design.
4. **Conversão Dinâmica via WhatsApp:** O formulário de contato coleta as informações do lead corporativo e gera de forma dinâmica um link direto de WhatsApp com mensagem contextualizada com o desafio operacional do usuário, acelerando a venda consultiva.
5. **Responsividade Otimizada:** Breakpoints adaptados para qualquer dispositivo móvel ou tablet, com botões amplos para melhor usabilidade de toque.

---

## 💻 Como Executar Localmente

1. Faça o clone do repositório ou baixe os arquivos em formato ZIP.
2. Extraia os arquivos no seu computador.
3. Navegue até a raiz do projeto e dê dois cliques no arquivo **`index.html`** para abrir o site instantaneamente no seu navegador padrão.

---

## 📞 Suporte e Contatos Comerciais

- **Telefone:** (62) 3927-1070
- **WhatsApp:** (62) 99217-1070
- **E-mail:** comercial@cerradotech.com.br
- **Endereço:** Rua Laranjeiras, Qd. 6, Lt. 7, St. C. Sul, Aparecida de Goiânia - GO, CEP: 74917-170

---

## 🗄️ Projeto de Banco de Dados (PostgreSQL / Supabase)

O repositório inclui a modelagem completa do banco de dados relacional para gerenciar os leads comerciais, segmentos, soluções e interações no diretório `database/`.

### Estrutura das Tabelas:
- **`segmentos`**: Armazena os mercados atendidos (postos, hotéis, resorts, etc.).
- **`solucoes`**: Registra as soluções de software oferecidas (SGP, Check-in Digital, Acesso, etc.).
- **`campanhas`**: Registra as campanhas de marketing de tráfego pago (Google Ads, Meta Ads).
- **`leads`**: Tabela central que armazena os dados dos contatos comerciais capturados no site, incluindo dados de empresa, cargo, solução de interesse e os parâmetros de rastreamento UTM.
- **`interacoes`**: Histórico completo de conversas (WhatsApp, e-mails, chamadas) vinculadas ao lead para controle de funil de vendas.
- **`usuarios_admin`**: Administradores do sistema (CRM/Dashboard).

### Como Configurar no Supabase:
1. Crie uma conta gratuita e um projeto no **[Supabase](https://supabase.com/)** (ou qualquer provedor PostgreSQL).
2. Acesse o **SQL Editor** no painel do Supabase.
3. Cole o conteúdo do arquivo [schema.sql](file:///c:/Users/Casa/OneDrive%20-%20Uniasselvi/%C3%81rea%20de%20Trabalho/cerrado-tech-site-main/cerrado-tech-site-main/database/schema.sql) e clique em **Run**.
4. A estrutura de tabelas, relacionamentos, triggers e os dados iniciais de Segmentos e Soluções serão implantados automaticamente.

### 📈 Rastreamento e Atribuição de Marketing (UTM)
O site captura automaticamente os parâmetros de campanha (`utm_source`, `utm_medium`, `utm_campaign`, `utm_content`, `utm_term`) da URL no momento em que o visitante pousa no site, persistindo-os durante a navegação via `sessionStorage`. Ao preencher o formulário em `contato.html`, esses parâmetros ocultos e a página de origem da conversão são coletados e estão prontos para envio ao banco de dados e/ou WhatsApp, garantindo controle total sobre o Retorno de Investimento (ROI) de marketing.

---

*Cerrado Tecnologia — Desde 1994, desenvolvendo tecnologia para operações reais.*
