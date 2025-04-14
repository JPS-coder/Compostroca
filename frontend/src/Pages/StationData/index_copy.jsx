import { React, useState } from 'react';
import styles from './StationData.module.css'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Messages from '../../Components/Messages';

function StationData () {
    const [nameStation, setNameStation] = useState('');
    const [volStation, setVolStation] = useState('');
    const [volPerson, setVolPerson] = useState('');
    const [volTotal, setVolTotal] = useState('');
    const [co2Avoided, setCO2Avoided] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    
    const navigate = useNavigate();
    
    const handleStationData = async (e) => {
        e.preventDefault();

        const data = {
            nameStation,
            volStation,
            volPerson,
            volTotal,
            co2Avoided
        }

        console.log("Dados simulados para envio:", data)

/*
        try {
            const response = await axios.post("http://localhost:3000/api/stationdata", data);
            console.log("Dados da estação enviados com sucesso:", response.data);
            navigate("/sucessPage");
        } catch (error){
            console.error("Erro ao enviar os dados da estação:", error.response?.data || error.message);
        }
  
  */
        navigate("/sucessPage")
    }
    return(
        <div className={styles.stationdata}>
            <h2>Cadastro da Estação</h2>
            <form onSubmit={handleStationData}>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label> Nome da Estação</label>
                            <input type="text" value={nameStation} onChange={(e) => setNameStation(e.target.value)} />   
                    </div>
                </div>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label> Volume da Estação </label>
                            <input type="number" value={volStation} onChange={(e) => setVolStation(e.target.value)} />
                    </div>
                    
                </div>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label> Volume por Pessoa </label>
                            <input type="number" value={volPerson} onChange={(e) => setVolPerson(e.target.value)} />
                        
                    </div>
                </div>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label> Volume Total</label>
                            <input type="number" value={volTotal} onChange={(e) => setVolTotal(e.target.value)} />
                     
                    </div>
                </div>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label> Emissões evitadas de CO2</label>
                            <input type="number" value={co2Avoided} onChange={(e) => setCO2Avoided(e.target.value)} />
                        
                    </div>
                </div>


                <button type="submit">Concluir</button>
            </form>

        </div>
        );


    }

export default StationData;