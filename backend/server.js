import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import wasteRoutes from './routes/waste.js';
import stationdataRoutes from './routes/station.js'
import pool from './database.js'

dotenv.config()

const app = express();

app.use(express.json()); 
app.use(cors()); 

app.use('/auth', authRoutes);
app.use('/waste', wasteRoutes);
app.use('/stationdata', stationdataRoutes)

app.get('/', (req, res) => {
    res.send ('API funcionando!')
});

const createTables = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS station_data (
                id SERIAL PRIMARY KEY,
                name_station VARCHAR(255),
                vol_station NUMERIC,
                vol_person NUMERIC,
                vol_total NUMERIC,
                co2_avoided NUMERIC
            );
        `);
        console.log("Tabela 'station_data' verificada/criada com sucesso.");
    
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id SERIAL PRIMARY KEY,
                name VARCHAR(255) NOT NULL,
                email VARCHAR(255) UNIQUE NOT NULL,
                password VARCHAR(255) NOT NULL,
                created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
            );
            `)
            console.log("Tabela 'users' verificada/criada com sucesso.")

    } catch (err) {
        console.error("Erro ao criar tabela:", err);
    }
};

/*app.listen(3000, async () => {
    await createTables();
    console.log('Servidor rodando na porta 3000');
})*/

const PORT = process.env.PORT || 3000;

app.listen(PORT, async () => {
  await createTables();
  console.log(`Servidor rodando na porta ${PORT}`);
});
