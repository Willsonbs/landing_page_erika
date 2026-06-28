<h1 align="center">
  🧠 Landing Page — Dra. Erika Gonçalves
</h1>

<p align="center">
  Site institucional e landing page para clínica de psiquiatria humanizada em Caruaru–PE.
</p>

<p align="center">
  <a href="#-sobre">Sobre</a> •
  <a href="#-seções">Seções</a> •
  <a href="#-tecnologias">Tecnologias</a> •
  <a href="#-pré-requisitos">Pré-requisitos</a> •
  <a href="#-como-executar">Como executar</a> •
  <a href="#-variáveis-de-ambiente">Variáveis de ambiente</a> •
  <a href="#-deploy-no-vercel">Deploy no Vercel</a>
</p>

---

## 📖 Sobre

Site profissional da **Dra. Erika Gonçalves** — psiquiatra com atuação em Caruaru–PE. Desenvolvido com React + Vite + Express, oferece:

- Apresentação da profissional e formação acadêmica
- Tratamentos especializados em psiquiatria
- E-books gratuitos sobre saúde mental
- Formulário de contato com envio de e-mail via Nodemailer
- Avaliações reais de pacientes
- FAQ
- Integração direta com WhatsApp para agendamento

---

## 📑 Seções

| Seção | Descrição |
|-------|-----------|
| Hero | Chamada principal com CTA para agendamento |
| Sobre | Carrossel com formação, especializações e áreas de atuação |
| Tratamentos | Cards com as especialidades atendidas |
| E-books | Download gratuito de guias de saúde mental |
| Avaliações | Carrossel de reviews de pacientes |
| FAQ | Perguntas frequentes |
| Contato | Formulário + informações de localização e horários |

---

## 🛠 Tecnologias

| Camada | Tecnologia |
|--------|-----------|
| Frontend | [React 19](https://react.dev) + [Vite 7](https://vite.dev) |
| Backend | [Express 4](https://expressjs.com) + [tRPC 11](https://trpc.io) |
| Linguagem | [TypeScript](https://www.typescriptlang.org) |
| Estilização | [Tailwind CSS v4](https://tailwindcss.com) |
| Componentes | [shadcn/ui](https://ui.shadcn.com) + [Radix UI](https://radix-ui.com) |
| Banco de dados | [MySQL](https://www.mysql.com) via [Drizzle ORM](https://orm.drizzle.team) |
| E-mail | [Nodemailer](https://nodemailer.com) com Gmail |
| Animações | [Framer Motion](https://www.framer.com/motion) |
| Ícones | [Lucide React](https://lucide.dev) |
| Fontes | Playfair Display + Poppins (Google Fonts) |
| Gerenciador | [pnpm](https://pnpm.io) |

---

## 📋 Pré-requisitos

- [Node.js](https://nodejs.org) >= 18
- [pnpm](https://pnpm.io) >= 10 (`npm install -g pnpm`)
- Conta Gmail com **Senha de App** habilitada (para envio de e-mails)
- Banco de dados **MySQL** (opcional — apenas para funcionalidades de autenticação)

---

## 🚀 Como executar

### 1. Clone o repositório

```bash
git clone https://github.com/Willsonbs/landing_page_erika.git
cd landing_page_erika
```

### 2. Instale as dependências

```bash
pnpm install
```

### 3. Configure as variáveis de ambiente

```bash
cp .env.example .env
```

Edite o `.env` com suas credenciais (veja a seção abaixo).

### 4. Inicie o servidor de desenvolvimento

```bash
pnpm dev
```

Acesse [http://localhost:5173](http://localhost:5173).

---

## 🔑 Variáveis de ambiente

Crie um arquivo `.env` na raiz do projeto:

```env
# ─── E-mail (obrigatório para o formulário de contato) ───
GMAIL_USER=seu.email@gmail.com
GMAIL_PASSWORD=sua_senha_de_app_gmail

# ─── Banco de dados MySQL (opcional) ─────────────────────
DATABASE_URL=mysql://USER:PASSWORD@HOST:3306/DATABASE

# ─── Aplicação ───────────────────────────────────────────
VITE_APP_TITLE=Dra. Erika Gonçalves - Psiquiatria
NEXT_PUBLIC_APP_URL=http://localhost:5173
```

### Como gerar a Senha de App do Gmail

1. Acesse [myaccount.google.com/security](https://myaccount.google.com/security)
2. Habilite **Verificação em duas etapas**
3. Em "Como fazer login no Google", clique em **Senhas de app**
4. Crie uma senha para "Email" e copie os 16 caracteres gerados
5. Use esse valor em `GMAIL_PASSWORD`

> **Atenção:** Nunca commite o `.env` com credenciais reais. O `.gitignore` já está configurado para ignorá-lo.

---

## ☁️ Deploy no Vercel

Consulte o arquivo [`DEPLOYMENT_VERCEL.md`](./DEPLOYMENT_VERCEL.md) para instruções detalhadas de deploy.

**Resumo rápido:**

1. Faça o push do repositório para o GitHub
2. Importe o projeto em [vercel.com/new](https://vercel.com/new)
3. Configure as variáveis de ambiente no painel do Vercel:
   - `GMAIL_USER`
   - `GMAIL_PASSWORD`
   - `DATABASE_URL` (se necessário)
4. O Vercel detecta automaticamente o `vercel.json` e faz o deploy

---

## 📁 Estrutura do projeto

```
├── client/                   # Frontend React + Vite
│   ├── public/               # Assets estáticos (imagens, e-books, favicon)
│   │   └── ebooks/           # PDFs dos e-books gratuitos
│   └── src/
│       ├── components/       # Componentes de seção
│       │   ├── ui/           # Componentes shadcn/ui
│       │   ├── Header.tsx
│       │   ├── Hero.tsx
│       │   ├── About.tsx
│       │   ├── Treatments.tsx
│       │   ├── Ebooks.tsx
│       │   ├── Reviews.tsx
│       │   ├── FAQ.tsx
│       │   ├── Contact.tsx
│       │   ├── Footer.tsx
│       │   └── FloatingWhatsApp.tsx
│       ├── pages/
│       │   └── Home.tsx      # Página principal (compõe todas as seções)
│       ├── contexts/
│       │   └── ThemeContext.tsx
│       ├── index.css         # Estilos globais + paleta de cores
│       └── main.tsx
├── server/                   # Backend Express + tRPC
│   ├── routers.ts            # Roteador tRPC (contact.sendMessage)
│   ├── email.ts              # Envio de e-mail via Nodemailer
│   └── _core/               # Infraestrutura (context, middlewares, auth)
├── shared/                   # Tipos e constantes compartilhados
├── drizzle/                  # Schema e migrations do banco de dados
├── vercel.json               # Configuração de deploy no Vercel
├── vite.config.ts
└── .env.example
```

---

## 🎨 Paleta de cores

| Token | Cor | Uso |
|-------|-----|-----|
| `--primary` | `#0b0c2b` | Azul escuro — textos, fundos |
| `--secondary` | `#9f895d` | Dourado — CTAs, destaques |
| `--background` | `#ffffff` | Fundo branco |
| `--secondary-light` | `#f5f3f0` | Bege claro — seções alternadas |

---

## 📞 Informações de contato (dados do site)

| Canal | Informação |
|-------|-----------|
| WhatsApp | [(81) 98209-5424](https://wa.me/5581982095424) |
| Instagram | [@draerikagoncalves](https://instagram.com/draerikagoncalves) |
| Endereço | R. Artur Antônio da Silva, 481 — Salas 1006/1007, Caruaru–PE |
| Horário | Segunda a sexta, 08h às 18h |

---

<p align="center">
  Desenvolvido por <a href="https://github.com/Willsonbs">Willsonbs</a>
</p>
