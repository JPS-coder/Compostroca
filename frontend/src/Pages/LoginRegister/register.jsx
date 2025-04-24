import { useState } from 'react';
import styles from './LoginRegister.module.css';
import Messages from '../../Components/Messages';


function Register() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState(null)
    const [type, setType] = useState(null)


    const handleRegister = async (e) => {
        e.preventDefault();

        setMessage(
            <>
                Cadastro realizado <br/>com sucesso.<br/>
                Muito Obrigado!
            </>)
        setType('success');
        setRedirectTo('/menu');
        setModalVisible(true);
    }

    

    return (
        <div className={`${styles.screenLoginRegister} ${styles.cad}`}>
            
            <Messages
                message={message}
                type={type}
                onClose={() => setMessage(null)}
            />

            <h2 className={styles.title}>Cadastro</h2>
            
            <form onSubmit={handleRegister}>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label>Nome:</label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            required
                        />
                    </div>
                
                </div>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label>Telefone:</label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e. target.value)}
                            required
                        />
                    </div>
                    
                </div>

                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label>Endereço:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e. target.value)}
                            required
                        />
                    </div>
                       
                </div>

                

                <button className={styles.cad} type='submit'>Enviar</button>
            </form>

        </div>
    );
    
};

export default Register;