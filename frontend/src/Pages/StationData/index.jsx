import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './StationData.module.css'
import Messages from '../../Components/Messages';
import SearchModal from '../../Components/Modal/searchModal';
import axios from 'axios';


function StationData () {
    const { register, handleSubmit, reset } = useForm();
    const [message, setMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false);
    const [showSearchModal, setShowSearchModal] = useState(false); 

    const onSubmit = async (data) => {
        console.log(data)
        reset()
    

        try {
             await axios.post("http://localhost:3000/stationdata", data);
            setMessage("Dados salvos com sucesso!");
            setShowMessage(true);
            
            
        } catch (error) {
            console.error("Erro ao enviar os dados da estação:", error);
            setMessage("Erro ao salvar dados.");
            setShowMessage(true);
        }
    };

    const handleNewRegister = () => {
    reset();
    setShowMessage(false);
  };
  
    return(
        <div className={styles.stationdata}>
            <div className={styles.containerSpan}>
                <span className={styles.btnSpan} onClick={() => setShowSearchModal(true)}>Visualizar Dados</span>
            </div>
            <h2>Cadastro da Estação</h2>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label> Nome da Estação</label>
                            <input type="text" {...register("nameStation")}/>  
                    </div>
                </div>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label> Volume da Estação </label>
                            <input type="number" {...register("volStation")} /> 
                    </div>
                    
                </div>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label> Volume por Pessoa </label>
                            <input type="number" {...register("volPerson")} />
                        
                    </div>
                </div>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label> Volume Total</label>
                            <input type="number" {...register("volTotal")}/>
                     
                    </div>
                </div>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label> Emissões evitadas de CO2</label>
                            <input type="number" {...register("co2Avoided")} />
                        
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