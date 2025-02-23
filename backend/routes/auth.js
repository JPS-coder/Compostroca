import express from 'express';
import pool from '../database';


const router = express.Router();

// Definição das rotas
router.post('/login', async (req, res) => {
    const { email, password } = req.body;
    try {
        // Verifica se o usuário existe no banco
        const result = await pool.query(
            'SELECT * FROM users WHERE email = $1 AND password = $2',
            [email, password]
        );

        if (result.rows.length >0) {
            res.status(200).json({ message: 'Login bem sucedido', user: result.rows[0] });
        } else {
            res.status(400).json({ message: 'Credenciais inválidas' });
        }
    } catch (error) {
        res.status(500).send('Erro ao tentar fazer login');
    }
});

// Rota de Registro
router.post('/register', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Verifica se o usuário já existe
        const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }

        // Cadastra o novo usuário
        const result = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING *',
            [name, email, password]
        );
        
        res.status(201).json({ message: 'Usuário registrado com sucesso!', user: result.rows[0] });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erro ao registrar o usuário');
    }
});

export default router; 
