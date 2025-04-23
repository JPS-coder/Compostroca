import express from 'express';
import pool from '../database.js';

const router = express.Router();

// Definiçao das rotas de resíduos
router.post('/waste', async (req, res) => {
    const { type, description } = req.body;
    try {
        const result = await pool.query(
            'INSERT INTO waste (type, description) VALUES ($1, $2) RETURNING *',
            [type, description]
        );
        
        res.status(201).json({ message: 'Resíduo cadastrado com sucesso!', waste: result.rows[0] });
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erro ao cadastrar resíduo');
    }
});

// Rota para listar resíduos
router.get('/waste', async (req, res) => {
    try {
        const result = await pool.query('SELECT * FROM waste');
        res.status(200).json(result.rows);
    } catch (error) {
        console.error(error.message);
        res.status(500).send('Erro ao listar resíduos');
    }

});

export default router; 
