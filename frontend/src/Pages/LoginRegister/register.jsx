import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import axios from 'axios';
import styles from './LoginRegister.module.css';
<<<<<<< HEAD
//import { useMessage } from "../../Components/Messages/index"
import Messages from '../../Components/Messages';


function Register() {
    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [phone, setPhone] = useState("");
    const [message, setMessage] = useState(null)
    const [type, setType] = useState(null)

=======
import { FaAt, FaLock } from 'react-icons/fa';


function Register() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [errorMessage, setErrorMessage] = useNavigate("");
    const navigate = useNavigate();
>>>>>>> 01e95db (add registerNewUser)

    const handleRegister = async (e) => {
        e.preventDefault();

<<<<<<< HEAD
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
=======
        if (password !== confirmPassword) {
            setErrorMessage('As senhas não coincidem!');
            return;
        }

        try {
            const response = await axios.post('http://localhost:3000/auth/register', { email, password });
            console.log('Cadastro realizado', response.data);
            navigate('/');
        } catch (error) {
            console.error ('Erro ao cadastrar:', error.response?.data || error.message);
            setErrorMessage('Erro no cadastro.Tente novamente.');
        }
    };
}
>>>>>>> 01e95db (add registerNewUser)

export default Register;