# Projeto: Compostroca

## Sistema de gerenciamento de Estações de Compostagem com cadastro, visualizaçao e controle de entrega de resíduos. Também dicas sobre reaproveitamento de resíduos,  guia da horta e alimentação saudável.

### Pré-requisitos
- Nodejs
- PostgreSQL

## Backend
### Instalar dependências
- cd backend
- npm install

### Banco de Dados
- instala o postgres
- acessa terminal cria usuario e senha
- cria bd: CREATE DATABASE estacoes_db

### Variaveis de ambiente (.env)
Configure seu arquivo `backend/.env` com as variáveis abaixo:

```env
DB_USER=seu_usuario_postgres
DB_PASS=sua_senha_postgres
DB_HOST=localhost
DB_NAME=nome_do_seu_banco
DB_PORT=5432
```

### Rodar servidor
- node server.js

## Frontend

### Instalar dependências
- cd frontend
- npm install

### Rodar
- npm run server

