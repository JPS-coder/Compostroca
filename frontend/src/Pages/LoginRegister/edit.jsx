import { useState } from "react";
import styles from './LoginRegister.module.css';
import Messages from "../../Components/Messages";

function Edit() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState(null)
    const [type, setType] = useState(null)

    const handleEdit = async (e) => {
        e.preventDefault();

        // simular tempo de resposta ddo servidor
        setMessage(
            <>
                Dados salvos <br/>com sucesso.
            </>)
        setType('success');
        setRedirectTo('/');
        setModalVisible(true);
    }

    
    return (
        <div className={`${styles.screenLoginRegister} ${styles.cad} ${styles.edit}`}>
            <Messages
                message={message}
                type={type}
                onClose={() => setMessage(null)}
            />
            <h2 className={styles.title}>Editar Dados</h2>
            <form onSubmit={handleEdit}>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label>
                            Nome:
                        </label>
                        <input
                            type="text"
                            value={name}
                            onChange={(e) => setName(e.target.value)}                         
                        />
                    </div>
                   
                </div>

                <div className={styles.inputForm}>
                        <div className={styles.labelInput}>
                            <label>
                                Endereço:
                            </label>
                            <input
                                type="text"
                                value={address}
                                onChange={(e) => setAddress(e. target.value)}
                                
                            />
                        </div>
                       
                </div>

                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label>
                            Telefone:
                        </label>
                        <input
                            type="tel"
                            value={phone}
                            onChange={(e) => setPhone(e. target.value)}
                            
                        />
                    </div>
                    
                </div>
                <div className={styles.inputForm}>
                        <div className={styles.labelInput}>
                            <label>
                                Email:
                            </label>
                            <input
                                type="email"
                                value={email}
                                onChange={(e) => setEmail(e. target.value)}
                                
                            />
                        </div>
                       
                </div>
                <div className={styles.inputForm}>
                        <div className={styles.labelInput}>
                            <label>
                                Senha:
                            </label>
                            <input
                                type="text"
                                value={password}
                                onChange={(e) => setPassword(e. target.value)}
                                
                            />
                        </div>
                       
                </div>

                <button className={styles.cad} type='submit'>Salvar</button>
            </form>
        </div>
    )

}

export default Edit;