import { React, useState } from 'react';
import styles from './StationData.module.css'
import { useNavigate, Link } from "react-router-dom";
import Messages from '../../Components/Messages';
import SearchModal from '../../Components/Modal/searchModal';
import axios from 'axios'

function StationData () {
    const [nameStation, setNameStation] = useState('');
    const [volStation, setVolStation] = useState('');
    const [volPerson, setVolPerson] = useState('');
    const [volTotal, setVolTotal] = useState('');
    const [co2Avoided, setCO2Avoided] = useState('');
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false);  
   

    const handleNewRegister = () => {
        setNameStation('');
        setVolStation('');
        setVolPerson('');
        setVolTotal('');
        setCO2Avoided('');
        setShowMessage(false); // fecha o modal
      };
    
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

        try {
             await axios.post("http://localhost:3000/stationdata", data);
            setMessage("Dados salvos com sucesso!");
            setShowMessage(true);
            
            
        } catch (error) {
            console.error("Erro ao enviar os dados da estação:", error);
            setMessage("Erro ao salvar dados.");
            setShowMessage(true);
        }

    }
    return(
        <div className={styles.stationdata}>
            <div className={styles.containerSpan}>
                <span className={styles.btnSpan} onClick={() => setShowSearchModal(true)}>Visualizar Dados</span>
            </div>
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


                <button type="submit">Salvar</button>
            </form>

            {showMessage && (
                <Messages
                message={message}
                type="success"
                onClose={() => setShowMessage(false)}
                
                
                >
                    <div className={styles.btnsReg}>
                        <p className={styles.btnReg} onClick={(e) => {
                                e.preventDefault();
                                handleNewRegister();
                                }}>Novo cadastro</p>
                        
                        <p className={styles.btnReg} onClick={(e) => {
                            e.preventDefault();
                            setShowSearchModal(true)
                        }}>Visualizar Dados</p>
                    </div>

                </Messages>    
            )}

            {showSearchModal && <SearchModal onClose={() => setShowSearchModal(false)} />}

        </div>
        );


    }

export default StationData;