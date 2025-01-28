import express from 'express';

const router = express.Router();

// Definiçao das rotas de resíduos
router.post('/waste', (req, res) => {
    res.send('Resíduos cadastrados!');
});

export default router; 
