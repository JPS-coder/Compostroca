import { useState } from 'react';
import styles from './LoginRegister.module.css';
//import { useMessage } from "../../Components/Messages/index"
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
        setRedirectTo('/');
        setModalVisible(true);
    }
       // const cadastroSimulado = true;

       // if (cadastroSimulado) {
        //   setModalVisible(true)
         //  console.log("Exibindo mensagem de cadastro");
          // showMessage("register", "Cadastro realizado com sucesso!");
    

        // simulacao do tempo de resposta do servidor
       // setTimeout(() => {
        //    setMensagem('Cadastro realizado com sucesso!');
        //    setType('success');
      //  }, 1000)
    

    return (
        <div className={`${styles.screenLoginRegister} ${styles.cad}`}>
            {/*<Messages message={message} type={type} />*/}
            
            {/* Exibir o modal somente se houver mensagem */}
            <Messages
                message={message}
                type={type}
                onClose={() => setMessage(null)}
                //actionText="Ir para o Login"
                //onAction={() => console.log('Redirecionando para login...')}
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
                        <label>Endereço:</label>
                        <input
                            type="text"
                            value={address}
                            onChange={(e) => setAddress(e. target.value)}
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

                <button className={styles.cad} type='submit'>Enviar</button>
            </form>

           
            {/*exibir modal quando showmessage for true 
            {modalVisible && (
                <div className={styles.modal}>
                    <div className={styles.modalContent}>
                        <h3>Cadastro realizado com sucesso!</h3>
                        <p>Muito Obrigado!</p>
                        <button onClick={() => setModalVisible(false)}></button>
                    </div>
                </div>
            )}*/}

        </div>
    )
    
};

export default Register;