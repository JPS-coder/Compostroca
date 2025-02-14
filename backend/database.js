import pkg from 'pg';
import dotenv from 'dotenv';

dotenv.config(); //carrega variáveis definidas em .env

const { Pool } = pkg; // pool gerencia conexoes, reutiliza conexoes, sem abrir/fechar toda vez que uma consulta é feita

const pool = new Pool({
    user: process.env.DB_USER,
    host: process.env.DB_HOST,
    database: process.env.DB_NAME,
    password: process.env.DB_PASS,
     port: process.env.DB_PORT,
})

pool.connect() // testa a conexão
    .then(() => console.log('PostgreSQL conectado com sucesso!'))
    .catch(err => console.error('Erro ao conectar no PostgreSQL:', err.message));

export default pool;
