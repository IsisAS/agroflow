# 🌾 AgroFlow - Sistema de Gerenciamento Agrícola

Este projeto é uma aplicação full-stack desenvolvida com **Next.js**. Seu objetivo é oferecer uma solução eficiente para o **gerenciamento de recursos agrícolas**, facilitando a visualização e manipulação de dados em uma interface intuitiva e moderna.

## 🚀 Objetivo do Projeto

O AgroFlow foi projetado para:  
- Implementar um sistema seguro de **autenticação de usuários** com NextAuth.  
- Fornecer um **dashboard dinâmico** com informações relevantes e organizadas.  
- Implementar funcionalidades **CRUD** (Create, Read, Update, Delete) para gerenciamento de dados.  
- Garantir **responsividade** e adaptação para diferentes dispositivos.  
- Utilizar **rotas de API** integradas no Next.js para simular operações de backend.  

---

## 🛠️ Tecnologias Utilizadas

- **Next.js**: Framework React para renderização híbrida (SSR e SSG).  
- **NextAuth**: Sistema de autenticação.  
- **TypeScript**: Tipagem estática para maior segurança e legibilidade do código.  
- **Tailwind CSS**: Estilização eficiente e responsiva.  
- **Vercel**: Plataforma para deploy otimizado e escalável.

---

## 📂 Estrutura do Projeto

```bash
src/
│-- app/
│   ├── api/             # Rotas de API do Next.js
│   │   └── auth/        # Endpoints de autenticação
│   │       └── [...nextauth]/route.ts
│   ├── dashboard/       # Área logada e dashboards
│   │   ├── layout.tsx   # Layout persistente para dashboard
│   │   └── page.tsx     # Página inicial do dashboard
│   ├── auth/            # Tela de login
│   └── page.tsx         # Página inicial (rota pública)
│
│-- components/          # Componentes reutilizáveis (ex: Input, Button)
│-- utils/               # Funções auxiliares (ex: withAuth)
│-- styles/              # Estilos globais
│-- public/              # Assets estáticos
│
└── README.md            # Documentação

```
## 🚀 Como Executar o Projeto
1. Clone o repositório:
```bash
git clone https://github.com/IsisAS/agroflow
```

2. Instale as dependências:
```bash
npm install
```
3. Configure o banco de dados com o Prisma:
```bash
npx prisma db push
npx prisma generate
```

4. Inicie o servidor de desenvolvimento:
```bash
npm run dev
```