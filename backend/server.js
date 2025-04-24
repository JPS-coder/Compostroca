import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import authRoutes from './routes/auth.js';
import wasteRoutes from './routes/waste.js';
import stationdataRoutes from './routes/station.js'

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

app.listen(3000, () => console.log('Servidor rodando na porta 3000'))