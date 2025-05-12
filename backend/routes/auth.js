import express from 'express';
import pool from '../database.js';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { body, validationResult } from 'express-validator';


const router = express.Router();

//Helper para gerar token JWT
const generateToken = (user) => {
    return jwt.sign(
        { id: user.id, email: user.email },
        process.env.JWT_SECRET || 'lembreteDeSenha',
        { expiresIn: '1h' }
    );
};

// Validaçao de login
const loginValidations = [
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6 })
];



router.post('/login', loginValidations, async (req, res) => {
    //Verifica erros de validaçao
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { email, password } = req.body;
    try {
        const userResult = await pool.query(
            'SELECT * FROM users WHERE email = $1 ',
            [email]
        );

        if (userResult.rows.length ===0) {
            return res.status(401).json({ message: 'Credenciais inválidas' });
        } 
        
        const user = userResult.rows[0];

        //compara senha com hash
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Credenciais inválidas' })
        }

        //Gera Token JWT
        const token = generateToken(user);

        //remove a senha do objeto user antes de enviar
        const { password: _, ...userWithoutPassword } = user;

        res.status(200).json({
            message: 'Login bem sucedido',
            user: userWithoutPassword,
            token
        });

    } catch (error) {
        console.error('Erro no login:', error)
        res.status(500).send('Erro ao tentar fazer login');
    }
});

//Validaçao de regisro
const registerValidations = [
    body('name').notEmpty().trim(),
    body('email').isEmail().normalizeEmail(),
    body('password').isLength({ min: 6})
]

router.post('/register', registerValidations, async (req, res) => {
    //Verifica erros de validaçao
    const errors = validationResult(req);
    console.log('🟡 Erros de validação:', errors.array());
    if(!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password } = req.body;
    
    try {
        //verifica se usuario já existe
        const existingUser = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
        
        if (existingUser.rows.length > 0) {
            return res.status(400).json({ message: 'Usuário já existe' });
        }
        // Cria hash de senha
        const salt = await bcrypt.genSalt(10);
        const handlePassword = await bcrypt.hash(password, salt);

        //Insere novo usuário
        const result = await pool.query(
            'INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email',
            [name, email, password]
        );

        const newuser = result.rows[0];
        const token = generateToken(newuser);

        
        res.status(201).json({ message: 'Usuário registrado com sucesso!',
            user: newuser, token });
    } catch (error) {
        console.error('❌ Erro no registro:', error.message, error.stack);
        res.status(500).json({ message: 'Erro ao registrar o usuário', error: error.message });
        
        
        //console.error('Erro no registro:', error);
        //res.status(500).json('Erro ao registrar o usuário');
    }
});

export default router; 
