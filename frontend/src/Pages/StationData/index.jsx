import { useState } from "react";
import { useNavigate, Link, data } from "react-router-dom";
import styles from "./StationData.module.css";
import axios from "axios";

function StationData () {
    const [stationName, setStationName] = useState ("");
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
            
        
    return(
        <div className={styles.stationdata}>
            <h2>Dados da Estação</h2>
            <form onSubmit={handleStationData}>
                <label> Nome da Estação
                    <input type="text" value={stationName} onChange={(e) => setStationName(e.target.value)} />
                </label>
                <label> Volume da Estação
                    <input type="number" value={stationVolume} onChange={(e) => setStationVolume(e.target.value)} />
                </label>
                <label> Volume por Pessoa
                    <input type="number" value={personVolume} onChange={(e) => setPersonVolume(e.target.value)} />
                </label>
                <label> Volume Total
                    <input type="number" value={totalVolume} onChange={(e) => setTotalVolume(e.target.value)} />
                </label>
                <label> Emissões evitadas de CO2
                    <input type="number" value={avoidedEmissions} onChange={(e) => setAvoidedEmissions(e.target.value)} />
                </label>


                <button type="submit">Concluir</button>
            </form>

        </div>
        );


    }
    
}

export default StationData;