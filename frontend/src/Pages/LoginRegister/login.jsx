import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./LoginRegister.module.css";
import { FaAt, FaLock } from 'react-icons/fa'
import Reset from "../../Components/Reset";
import axios from 'axios';

function Login() {
    const [email, setEMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();
    const [resetType, setResetType] = useState(null);

    const handleLogin = async (e) => {
        e.preventDefault();

       /*simulacao tempo de resposta do servidor para teste em desenvolvimento
       setTimeout(() => {
        console.log("Login bem-sucedido (simulação)");
        navigate("/menu");  // Redireciona para a página "home"
    }, 1000);*/
       try {
            const response = await axios.post("http://localhost:3000/auth/login", {email, password})
            console.log("Login bem-sucedido:", response.data);
            navigate("/home");
        } catch (error) {
            console.error("Erro no login", error.response?.data || error.message)
        }
    };
    if (resetType) {
        return <Reset type={resetType} onCancel={() => setResetType(null)} />;
    }

    return (
        <div className={styles.screenLoginRegister}>
            <h2>Entrar</h2>
            <form onSubmit={handleLogin}>
                <div className={styles.inputForm}>
                    <FaAt className={styles.icon} />
                    <input
                     type="email"
                     value={email} 
                     onChange={(e) => setEMail(e.target.value)}
                     placeholder= 'Digite seu e-mail'
                     required
                    />
                </div>

                <div className={styles.inputForm}>

                    <FaLock className={styles.icon} />
                    <input 
                        type="password" 
                        value={password} 
                        onChange={(e) => setPassword(e. target.value)} 
                        placeholder="Digite sua senha"
                        required
                    />
                </div>
                <div className={styles.paragraph}>
                    <button
                        className={styles.msg}
                        onClick={() => setResetType("firstAccess")}
                        type="button"
                    >
                        Primeiro Acesso
                    </button>
                    <button
                        className={styles.msg}
                        onClick={() => setResetType("forgotPassword")}
                        type="button"
                    >
                        Esqueci a Senha
                    </button>
                    </div>
                
                
                <button className={styles.btnAccess} type="submit">Acessar</button>          
            </form>

            {resetType && (
                <div className={styles.modalOverlay}>
                    <div className={styles.modal}>
                        <Reset type={resetType} closeModal={() => setResetType(null)}/>
                        
                    </div>
                </div>
            )}

        </div>
    )
    
}

export default Login;