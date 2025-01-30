import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import styles from "./Login.module.css";

function Login() {
    const [email, setEMail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post("http://localhost:3000/aith/login", {email, password})
            console.log("Login bem-sucedido:", response.dat);
            navigate("/");
        } catch (error) {
            console.error("Erro no login", error.response?.data || error.message)
        }
    };

    return (
        <div className={styles.screenLogin}>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <label>Email</label>
                <input type="email" value={email} onChange={(e) => setEMail(e.target.value)} required />

                <label>Senha</label>
                <input type="password" value={password} onChange={(e) => setPassword(e. target.value)} required />

                <button type="submit">Entrar</button>            
            </form>

            <p>
                Ainda não possui uma conta?<span onClick={() => navigate("/register")} className={styles.linkReg}>Crie Agora</span>
            </p>

        </div>
    )
}

export default Login;