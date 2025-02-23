import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import styles from "./LoginRegister.module.css";
import { FaAt, FaLock } from 'react-icons/fa'


function Login() {
    const [email, setEMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

       // simulacao tempo de resposta api
       setTimeout(() => {
        console.log("Login bem-sucedido (simulação)");
        navigate("/");  // Redireciona para a página "home"
    }, 1000);
       /* try {
            const response = await axios.post("http://localhost:3000/auth/login", {email, password})
            console.log("Login bem-sucedido:", response.data);
            navigate("/home");
        } catch (error) {
            console.error("Erro no login", error.response?.data || error.message)
        }*/
    };

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
                <p className={styles.msg}> Esqueci a Senha</p>
                
                <button type="submit">Acessar</button>  
                       
            </form>

            <p>
                Ainda não possui uma conta?<Link to ="/registernewuser" className={styles.link}>Crie Agora</Link>
            </p>

        </div>
    )
}

export default Login;