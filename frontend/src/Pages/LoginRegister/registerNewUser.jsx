import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { useNavigate, Link } from 'react-router-dom';
import styles from './LoginRegister.module.css';
import { FaAt, FaLock } from 'react-icons/fa';
import Messages from '../../Components/Messages';


function RegisterNewUser() {
    const { register, handleSubmit } = useForm();
    const [errorMessage, setErrorMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false)
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [type, setType] = useState(null)
     const [redirectTo, setRedirectTo] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);


      const onSubmit = async(data) => {
        console.log(data)

            setMessage(
                <>
                    <p><Link to='/cadastro'>Clique Aqui para</Link></p>
                    <p>completar seu</p>
                    <p>cadastro e </p>
                    Explore o que <br /> preparamos para <br /> você.
                </>)
            setType('success');
            setRedirectTo('/');
            setModalVisible(true);
    };
    

    return (
        <div className={styles.screenLoginRegister}> 
            <Messages
                message={message}
                type={type}
                onClose={() => setMessage(null)}
                extraMessage={<>Obrigado por se <br /> juntar à </>}
            />
            <h2>Novo Usuário</h2>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div className={styles.inputForm}>
                    <FaAt className={styles.icon} />
                    <input
                        type="email"
                        {...register("email", { required: true })}
                        />
                        
                </div>

                <div className={styles.inputForm}>
                    <FaLock className={styles.icon} />
                        <input 
                            type="password" 
                            {...register("password", { required: true })}
                            />

                </div>

                <div className={styles.inputForm}>
                    <FaLock className={styles.icon} />
                        <input 
                            type="password"
                            placeholder="Repita a senha"
                            {...register("confirmPassword", { required: true })}
                            />
                        
                </div>
                {errorMessage && <p className={styles.msg}>{errorMessage}</p>}
                
                <button type='submit'>Registrar</button>
            </form>

            <p className={styles.msg}>
                Já possui uma conta? <Link to ="/login" className={styles.link}>Faça Login</Link>
            </p>

            {showMessage && (
                <Messages
                    type="newUser"
                    message="Obrigado por se juntar à"
                    onClose={() => setShowMessage(false)}
                />
            )}

        </div>
    )
}

export default RegisterNewUser;