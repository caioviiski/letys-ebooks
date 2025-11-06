# 📚 Lety's Ebooks

Plataforma de e-commerce para venda de ebooks infantis digitais.

## 🚀 Stack Tecnológica

- **Framework:** Next.js 14 (App Router)
- **Linguagem:** TypeScript
- **Estilização:** Tailwind CSS
- **Banco de Dados:** Supabase (PostgreSQL)
- **Autenticação:** Supabase Auth
- **Pagamentos:** Stripe
- **Deploy:** Vercel

## ⚙️ Configuração do Projeto

### 1. Clonar o Repositório

```bash
git clone https://github.com/caioviiski/letys-ebooks.git
cd letys-ebooks
```

### 2. Instalar Dependências

```bash
npm install
```

### 3. Configurar Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto:

```env
# Supabase
NEXT_PUBLIC_SUPABASE_URL=https://kspffwantpschaascidy.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=sua_chave_anon_aqui
SUPABASE_SERVICE_ROLE_KEY=sua_chave_service_role_aqui

# Stripe
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=sua_chave_publishable_aqui
STRIPE_SECRET_KEY=sua_chave_secret_aqui
STRIPE_WEBHOOK_SECRET=sua_webhook_secret_aqui

# URL da Aplicação
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### 4. Executar em Desenvolvimento

```bash
npm run dev
```

Acesse: [http://localhost:3000](http://localhost:3000)

## 📁 Estrutura do Projeto

```
letys-ebooks/
├── app/                    # App Router do Next.js 14
│   ├── (auth)/            # Rotas de autenticação
│   ├── (shop)/            # Rotas da loja
│   ├── api/               # API Routes
│   ├── layout.tsx         # Layout principal
│   └── page.tsx           # Página inicial
├── components/            # Componentes React
│   ├── ui/               # Componentes de UI
│   ├── ebook-card.tsx    # Card de ebook
│   ├── header.tsx        # Cabeçalho
│   └── footer.tsx        # Rodapé
├── lib/                  # Utilidades
│   ├── supabase.ts       # Cliente Supabase
│   ├── stripe.ts         # Cliente Stripe
│   └── utils.ts          # Funções utilitárias
├── types/                # TypeScript types
│   └── database.ts       # Tipos do banco de dados
├── public/               # Arquivos estáticos
├── .env.local           # Variáveis de ambiente (não commitado)
├── .gitignore
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## 🗄️ Banco de Dados Supabase

### Tabelas Principais

**ebooks**
- id (UUID)
- title (TEXT)
- description (TEXT)
- author (TEXT)
- price (DECIMAL)
- cover_image_url (TEXT)
- file_url (TEXT)
- category (TEXT)
- pages (INTEGER)
- language (TEXT)
- age_range (TEXT)
- created_at (TIMESTAMP)

**purchases**
- id (UUID)
- user_id (UUID) - FK para auth.users
- ebook_id (UUID) - FK para ebooks
- stripe_payment_id (TEXT)
- amount (DECIMAL)
- purchased_at (TIMESTAMP)

### Storage

- **Bucket:** `ebook-files` (privado)
- Armazena arquivos PDF dos ebooks

## 💳 Integração Stripe

### Configuração

1. Criar conta no [Stripe](https://stripe.com)
2. Obter chaves API (Publishable e Secret)
3. Configurar Webhook para eventos de pagamento
4. Endpoint do Webhook: `https://seu-dominio.com/api/webhooks/stripe`

### Eventos do Webhook

- `checkout.session.completed` - Pagamento concluído
- `payment_intent.succeeded` - Intenção de pagamento bem-sucedida

## 🚀 Deploy na Vercel

### Via Interface Vercel

1. Acesse [Vercel](https://vercel.com)
2. Conecte sua conta GitHub
3. Importe o repositório `letys-ebooks`
4. Configure as variáveis de ambiente
5. Deploy automático!

### Via CLI

```bash
npm i -g vercel
vercel login
vercel
```

## 📝 Funcionalidades

- ✅ Catálogo de ebooks com busca e filtros
- ✅ Sistema de autenticação (Supabase Auth)
- ✅ Carrinho de compras
- ✅ Checkout seguro com Stripe
- ✅ Download de ebooks após compra
- ✅ Biblioteca pessoal do usuário
- ✅ Painel administrativo (futuro)
- ✅ Design responsivo

## 🔐 Segurança

- Row Level Security (RLS) no Supabase
- Autenticação JWT
- URLs de download com expiração
- Validação de pagamento via webhooks
- HTTPS obrigatório em produção

## 📦 Scripts Disponíveis

```bash
npm run dev      # Desenvolvimento
npm run build    # Build para produção
npm run start    # Servidor de produção
npm run lint     # Linter ESLint
```

## 🤝 Contribuindo

1. Fork o projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📄 Licença

Este projeto é privado e proprietário.

## 📞 Contato

- GitHub: [@caioviiski](https://github.com/caioviiski)
- Projeto: [letys-ebooks](https://github.com/caioviiski/letys-ebooks)
