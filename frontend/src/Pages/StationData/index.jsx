import {React, useState } from 'react';
import styles from './StationData.module.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";

function StationData () {
    const [nameStation, setNameStation] = useState('');
    const {volStation, setVolStation} = useState('');
    const [volPerson, setVolPerson] = useState('');
    const [volTotal, setVolTotal] = useState('');
    const [co2Avoided, setCO2Avoided] = useState('')
    
    const navigate = useNavigate();
    
    const handleStationData = async (e) => {
        e.preventDefault();

        const data = {
            stationName,
        }


        try {
            const response = await axios.post("http://localhost:3000/api/stationdata", data);
            console.log("Dados da estação enviados com sucesso:", response.data);
            navigate("/sucessPage");
        } catch (error){
            console.error("Erro ao enviar os dados da estação:", error.response?.data || error.message);
        }
  
}  
    return(
        <div className={styles.stationdata}>
            <h2>Dados da Estação</h2>
            <form onSubmit={handleStationData}>
                <label> Nome da Estação
                    <input type="text" value={nameStation} onChange={(e) => setNameStation(e.target.value)} />
                </label>
                <label> Volume da Estação
                    <input type="number" value={volStation} onChange={(e) => setVolStation(e.target.value)} />
                </label>
                <label> Volume por Pessoa
                    <input type="number" value={volPerson} onChange={(e) => setVolPerson(e.target.value)} />
                </label>
                <label> Volume Total
                    <input type="number" value={volTotal} onChange={(e) => setVolTotal(e.target.value)} />
                </label>
                <label> Emissões evitadas de CO2
                    <input type="number" value={co2Avoided} onChange={(e) => setCO2Avoided(e.target.value)} />
                </label>


                <button type="submit">Concluir</button>
            </form>

        </div>
        );


    };
    


export default StationData;