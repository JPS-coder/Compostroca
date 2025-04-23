import express from 'express'
import pool from '../database.js'

const router = express.Router()

router.post('/', async (req, res) => {
    const { nameStation, volStation, volPerson, volTotal, co2Avoided } = req.body;

    try {
      const query = 
      'INSERT INTO station_data (name_station, vol_station, vol_person, vol_total, co2_avoided) VALUES ($1, $2, $3, $4, $5)  RETURNING *;'
      ;

      const values = [nameStation, volStation, volPerson, volTotal, co2Avoided];
      const result = await pool.query(query, values);

      res.status(201).json({ message: 'Dados salvos com sucesso!', data: result.rows[0] });
    } catch (error) {
        console.error('Erro ao salvar dados da estaçao:', error.message);
        res.status(500).json({ message: 'Erro ao salvar dados da estação.'});
    }
})
 

router.get('/name/:nameStation', async (req, res) => {
    const { nameStation } = req.params;
  
    try {
      const query = 'SELECT * FROM station_data WHERE name_station = $1';
      const result = await pool.query(query, [nameStation]);
  
      if (result.rows.length === 0) {
        return res.status(404).json({ message: 'Estação não encontrada.' });
      }
  
      res.status(200).json(result.rows[0]);
    } catch (error) {
      console.error('Erro ao buscar estação:', error.message);
      res.status(500).json({ message: 'Erro ao buscar estação.' });
    }
  });
  

router.get('/:id', async (req, res) => {
    try {
        const query = 'SELECT * FROM station_data WHERE Id =$1';
        const result = await pool.query(query, [id]);

        if (result.rows.length === 0) {
            return res.status(404).json({ message: 'Estaçao não encontrada'});
        }

        res.status(200).json(result.rows[0]);  
    } catch (error) {
        console.error('Erro ao buscar dados da estaçao:', error.message);
        res.status(500).json({ message: 'Erro ao buscar dados da estação.' });
    }
})


router.get('/', async (req, res) => {
    try {
      const result = await pool.query('SELECT * FROM station_data');
      res.json(result.rows);
    } catch (error) {
      res.status(500).json({ message: 'Erro ao buscar estações.' });
    }
  });
  

export default router;