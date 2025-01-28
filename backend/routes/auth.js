import express from 'express';

const router = express.Router();

// Definição das rotas
router.post('/login', (req, res) => {
    res.send('Login route');
});

router.post('/register', (req, res) => {
    res.send('Register route');
});

export default router; 
