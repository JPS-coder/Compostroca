import { useState } from "react";
import { useNavigate } from "react-router-dom";
import styles from "./LoginRegister.module.css";
import { FaAt, FaLock } from 'react-icons/fa'
import Reset from "../../Components/Reset";
import axios from 'axios';
import { useForm } from 'react-hook-form'


function Login() {
    const { register, handleSubmit } = useForm();
    const navigate = useNavigate();
    const [resetType, setResetType] = useState(null);

    const onSubmit = async (data) => {

       try {
            const response = await axios.post("http://localhost:3000/auth/login", data)
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
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className={styles.inputForm}>
                    <FaAt className={styles.icon} />
                    <input
                     type="email" 
                     placeholder= 'Digite seu e-mail'
                     {...register("email", { required: true })}
                    />
                    
                </div>

                <div className={styles.inputForm}>

                    <FaLock className={styles.icon} />
                    <input 
                        type="password" 
                        placeholder="Digite sua senha"
                        {...register("password", { required: true })}  
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