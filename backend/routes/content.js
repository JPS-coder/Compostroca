import express from 'express'
import pool from '../database.js'

const router = express.Router();

// criar novo conteúdo 
router.post('/', async (req, res) => {
    const { title, content, category, type } = req.body;
    
})