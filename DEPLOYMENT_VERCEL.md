# Guia de Deployment no Vercel

Este documento descreve como fazer o deploy da Landing Page da Dra. Erika no Vercel com funcionalidade completa de backend.

## Pré-requisitos

- Conta no Vercel (https://vercel.com)
- Repositório no GitHub com o código do projeto
- Variáveis de ambiente configuradas

## Passo 1: Preparar o Repositório no GitHub

1. **Fazer push do código para o GitHub:**
   ```bash
   git init
   git add .
   git commit -m "Initial commit: Landing page Dra. Erika"
   git branch -M main
   git remote add origin https://github.com/seu-usuario/dra_erika_landing_page_new.git
   git push -u origin main
   ```

2. **Verificar se o arquivo `vercel.json` está no repositório:**
   - Este arquivo já foi criado e contém a configuração necessária para o Vercel

## Passo 2: Conectar o Repositório ao Vercel

1. **Acesse o Vercel:**
   - Vá para https://vercel.com/dashboard
   - Clique em "Add New..." e selecione "Project"

2. **Importar o Repositório:**
   - Selecione "Import Git Repository"
   - Conecte sua conta GitHub se necessário
   - Selecione o repositório `dra_erika_landing_page_new`

3. **Configurar o Projeto:**
   - **Project Name:** `dra-erika-landing-page` (ou outro nome desejado)
   - **Framework Preset:** Deixe como "Other"
   - **Build Command:** `pnpm build` (já configurado no vercel.json)
   - **Output Directory:** `dist`
   - **Install Command:** `pnpm install` (já configurado no vercel.json)

## Passo 3: Configurar Variáveis de Ambiente

No Vercel, você precisa configurar as seguintes variáveis de ambiente:

### Variáveis Obrigatórias

1. **DATABASE_URL**
   - Conexão com o banco de dados MySQL/TiDB
   - Exemplo: `mysql://user:password@host:port/database`
   - Você pode usar:
     - PlanetScale (MySQL compatível, gratuito)
     - Neon (PostgreSQL, gratuito)
     - Seu próprio servidor MySQL

2. **JWT_SECRET**
   - Chave secreta para assinar cookies de sessão
   - Gere uma string aleatória forte (mínimo 32 caracteres)
   - Exemplo: `your-super-secret-jwt-key-here-minimum-32-chars`

3. **VITE_APP_ID**
   - ID da aplicação OAuth (fornecido pelo Manus)
   - Exemplo: `your-app-id`

4. **OAUTH_SERVER_URL**
   - URL do servidor OAuth
   - Exemplo: `https://api.manus.im`

5. **VITE_OAUTH_PORTAL_URL**
   - URL do portal OAuth
   - Exemplo: `https://oauth.manus.im`

6. **OWNER_OPEN_ID**
   - ID único do proprietário (fornecido pelo Manus)

7. **OWNER_NAME**
   - Nome do proprietário
   - Exemplo: `Dra. Erika Gonçalves`

### Variáveis Opcionais (Manus Built-in APIs)

8. **BUILT_IN_FORGE_API_URL**
   - URL da API Manus
   - Exemplo: `https://api.manus.im/forge`

9. **BUILT_IN_FORGE_API_KEY**
   - Chave de API para acesso ao backend
   - Fornecida pelo Manus

10. **VITE_FRONTEND_FORGE_API_KEY**
    - Chave de API para acesso do frontend
    - Fornecida pelo Manus

11. **VITE_FRONTEND_FORGE_API_URL**
    - URL da API para frontend
    - Exemplo: `https://api.manus.im/forge`

12. **VITE_ANALYTICS_ENDPOINT**
    - Endpoint do Umami Analytics
    - Exemplo: `https://analytics.example.com`

13. **VITE_ANALYTICS_WEBSITE_ID**
    - ID do website no Umami
    - Exemplo: `your-website-id`

14. **VITE_APP_TITLE**
    - Título da aplicação
    - Exemplo: `Dra. Erika Gonçalves - Psiquiatra`

15. **VITE_APP_LOGO**
    - URL do logo da aplicação
    - Exemplo: `https://seu-dominio.com/logo.png`

### Como Adicionar Variáveis no Vercel

1. No dashboard do Vercel, vá para seu projeto
2. Clique em "Settings"
3. Selecione "Environment Variables"
4. Clique em "Add New"
5. Preencha:
   - **Name:** Nome da variável (ex: `DATABASE_URL`)
   - **Value:** Valor da variável
   - **Environments:** Selecione "Production", "Preview" e "Development"
6. Clique em "Save"

## Passo 4: Configurar Banco de Dados

### Opção A: PlanetScale (Recomendado - Gratuito)

1. **Criar conta no PlanetScale:**
   - Vá para https://planetscale.com
   - Crie uma conta gratuita

2. **Criar um banco de dados:**
   - Clique em "Create a new database"
   - Nome: `dra_erika_db`
   - Region: Escolha a mais próxima

3. **Obter a string de conexão:**
   - Vá para "Connect"
   - Selecione "Node.js"
   - Copie a string de conexão
   - Cole como `DATABASE_URL` no Vercel

4. **Executar migrations:**
   - Após o primeiro deploy, execute:
   ```bash
   pnpm db:push
   ```

### Opção B: Seu Próprio Servidor MySQL

1. Configure um servidor MySQL acessível
2. Crie um banco de dados
3. Obtenha a string de conexão: `mysql://user:password@host:port/database`
4. Configure como `DATABASE_URL` no Vercel

## Passo 5: Deploy

1. **Volte para a página do projeto no Vercel**
2. **Clique em "Deploy"**
3. **Aguarde o build completar** (pode levar 2-5 minutos)
4. **Verifique o status:**
   - Se houver erro, clique em "View Build Logs" para diagnosticar
   - Se bem-sucedido, você receberá uma URL pública

## Passo 6: Testar o Deploy

1. **Acesse a URL fornecida pelo Vercel**
2. **Teste as funcionalidades:**
   - Navegação responsiva
   - Formulário de contato
   - Integração com WhatsApp
   - Carregamento de imagens

## Passo 7: Configurar Domínio Personalizado (Opcional)

1. No Vercel, vá para "Settings" → "Domains"
2. Clique em "Add Domain"
3. Digite seu domínio (ex: `clinicadraerikagoncalves.com`)
4. Siga as instruções para configurar DNS

## Troubleshooting

### Erro: "Build failed"
- Verifique os logs de build
- Certifique-se de que todas as variáveis de ambiente estão configuradas
- Verifique se a string `DATABASE_URL` está correta

### Erro: "Cannot find module"
- Execute `pnpm install` localmente
- Verifique se o `pnpm-lock.yaml` está no repositório

### Erro: "Database connection failed"
- Verifique a string `DATABASE_URL`
- Certifique-se de que o banco de dados está acessível
- Teste a conexão localmente primeiro

### Página não carrega
- Verifique se o build foi bem-sucedido
- Limpe o cache do navegador (Ctrl+Shift+Delete)
- Verifique o console do navegador para erros

## Próximos Passos

1. **Configurar email para notificações de contato**
2. **Adicionar mais conteúdo e imagens**
3. **Otimizar performance**
4. **Configurar SSL/HTTPS** (automático no Vercel)
5. **Monitorar analytics**

## Suporte

Para dúvidas sobre o Vercel:
- Documentação: https://vercel.com/docs
- Suporte: https://vercel.com/support

Para dúvidas sobre o projeto:
- Verifique o arquivo `README.md`
- Consulte a documentação do template
