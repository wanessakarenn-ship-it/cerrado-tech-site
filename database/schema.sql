-- ==========================================================================
-- ESTRUTURA DO BANCO DE DADOS — CERRADO TECH (2026)
-- Banco de dados recomendado: PostgreSQL (Compatível com Supabase, Neon, etc.)
-- Todos os comentários estão em português do Brasil.
-- ==========================================================================

-- Habilitar a extensão necessária para geração de chaves UUIDv4
CREATE EXTENSION IF NOT EXISTS "uuid-ossp";

-- ==========================================================================
-- 1. TABELA: segmentos
-- Armazena os segmentos de mercado atendidos pela Cerrado Tech
-- ==========================================================================
CREATE TABLE segmentos (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(150) NOT NULL,
    slug VARCHAR(150) UNIQUE NOT NULL,
    descricao TEXT,
    ativo BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT NOW()
);

-- ==========================================================================
-- 2. TABELA: solucoes
-- Armazena as soluções tecnológicas oferecidas pela Cerrado Tech
-- ==========================================================================
CREATE TABLE solucoes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(150) NOT NULL,
    slug VARCHAR(150) UNIQUE NOT NULL,
    descricao TEXT,
    ativo BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT NOW()
);

-- ==========================================================================
-- 3. TABELA: campanhas
-- Registra as campanhas de marketing digital e tráfego pago (Google, Meta, etc.)
-- ==========================================================================
CREATE TABLE campanhas (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(200) NOT NULL,
    plataforma VARCHAR(100), -- Ex: Google Ads, Meta Ads, LinkedIn Ads
    objetivo VARCHAR(100),   -- Ex: Geração de Leads, Tráfego, Conversões
    segmento_foco VARCHAR(150),
    url_destino TEXT,
    data_inicio DATE,
    data_fim DATE,
    status VARCHAR(50) DEFAULT 'ativa', -- Ex: ativa, pausada, concluída
    criado_em TIMESTAMP DEFAULT NOW()
);

-- ==========================================================================
-- 4. TABELA: leads
-- Tabela principal para armazenamento de contatos captados comercialmente
-- ==========================================================================
CREATE TABLE leads (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(180) NOT NULL,
    telefone VARCHAR(50) NOT NULL,
    empresa VARCHAR(180),
    cargo VARCHAR(120),
    
    -- Relacionamentos (Chaves Estrangeiras)
    segmento_id UUID REFERENCES segmentos(id) ON DELETE SET NULL,
    solucao_id UUID REFERENCES solucoes(id) ON DELETE SET NULL,
    campanha_id UUID REFERENCES campanhas(id) ON DELETE SET NULL,
    
    mensagem TEXT,
    origem VARCHAR(100) DEFAULT 'site', -- Ex: site, whatsapp, feira, indicado
    pagina_origem VARCHAR(255),         -- URL exata onde o lead converteu
    
    -- Parâmetros UTM para atribuição de marketing digital
    utm_source VARCHAR(150),
    utm_medium VARCHAR(150),
    utm_campaign VARCHAR(200),
    utm_content VARCHAR(200),
    utm_term VARCHAR(200),
    
    -- Funil Comercial
    status VARCHAR(50) DEFAULT 'novo', -- novo, em_atendimento, qualificado, sem_perfil, proposta_enviada, negociacao, convertido, perdido
    prioridade VARCHAR(50) DEFAULT 'normal', -- baixa, normal, alta, urgente
    
    criado_em TIMESTAMP DEFAULT NOW(),
    atualizado_em TIMESTAMP DEFAULT NOW()
);

-- Trigger para atualizar automaticamente o campo 'atualizado_em' em caso de UPDATE no lead
CREATE OR REPLACE FUNCTION trigger_set_timestamp()
RETURNS TRIGGER AS $$
BEGIN
  NEW.atualizado_em = NOW();
  RETURN NEW;
END;
$$ LANGUAGE plpgsql;

CREATE TRIGGER set_timestamp_leads
BEFORE UPDATE ON leads
FOR EACH ROW
EXECUTE PROCEDURE trigger_set_timestamp();

-- ==========================================================================
-- 5. TABELA: interacoes
-- Histórico completo de conversas, e-mails, reuniões e contatos com cada lead
-- ==========================================================================
CREATE TABLE interacoes (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    lead_id UUID NOT NULL REFERENCES leads(id) ON DELETE CASCADE,
    tipo VARCHAR(100) NOT NULL, -- Ex: WhatsApp, Chamada, E-mail, Reunião Presencial
    descricao TEXT NOT NULL,     -- Detalhes da interação
    responsavel VARCHAR(150),   -- Nome do vendedor / atendente
    data_interacao TIMESTAMP DEFAULT NOW(),
    criado_em TIMESTAMP DEFAULT NOW()
);

-- ==========================================================================
-- 6. TABELA: usuarios_admin
-- Usuários do painel administrativo (futuro CRM / Dashboard Cerrado Tech)
-- ==========================================================================
CREATE TABLE usuarios_admin (
    id UUID PRIMARY KEY DEFAULT uuid_generate_v4(),
    nome VARCHAR(150) NOT NULL,
    email VARCHAR(180) UNIQUE NOT NULL,
    senha_hash TEXT NOT NULL,
    perfil VARCHAR(50) DEFAULT 'comercial', -- Ex: admin, comercial, marketing
    ativo BOOLEAN DEFAULT TRUE,
    criado_em TIMESTAMP DEFAULT NOW()
);

-- ==========================================================================
-- DADOS INICIAIS (POPULAR TABELAS BASE DE SEGMENTOS E SOLUÇÕES)
-- ==========================================================================

-- Inserir Segmentos Padrão
INSERT INTO segmentos (nome, slug, descricao) VALUES
('Postos de Combustíveis', 'postos', 'Soluções para gestão e automação de postos de combustíveis.'),
('Redes de Postos', 'redes', 'Soluções para operações com múltiplas unidades.'),
('Gestores Operacionais', 'gestores', 'Ferramentas para controle, gestão e acompanhamento operacional.'),
('Hotéis', 'hoteis', 'Soluções para gestão, check-in e controle de operações hoteleiras.'),
('Pousadas', 'pousadas', 'Soluções para atendimento, controle e gestão de pousadas.'),
('Resorts', 'resorts', 'Soluções para operações complexas de hospedagem e lazer.'),
('Clubes Recreativos', 'clubes', 'Tecnologia para controle de acesso, gestão e atendimento.'),
('Parques Aquáticos', 'parques', 'Soluções para bilheteria, acesso, operation e gestão.'),
('Outros Segmentos', 'outros', 'Outras empresas com necessidade de soluções tecnológicas.');

-- Inserir Soluções Padrão
INSERT INTO solucoes (nome, slug, descricao) VALUES
('SGP Integrado', 'sgp', 'Sistema integrado de gestão para operações comerciais e administrativas.'),
('Automação Comercial', 'automacao', 'Solução para automação de processos comerciais e operacionais.'),
('Check-in Digital', 'checkin', 'Ferramenta para agilizar processos de entrada, cadastro e atendimento.'),
('Controle de Acesso', 'acesso', 'Sistema para controle de entrada, circulação e segurança operacional.'),
('Venda Online de Ingressos', 'ingressos', 'Solução para venda digital de ingressos e controle de entrada.'),
('Dashboards Gerenciais', 'dashboards', 'Painéis de indicadores para tomada de decisão e gestão.');
