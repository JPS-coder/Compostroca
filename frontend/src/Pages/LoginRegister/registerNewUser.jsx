import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import styles from './LoginRegister.module.css';
import { FaAt, FaLock } from 'react-icons/fa';
import Messages from '../../Components/Messages';


function RegisterNewUser() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfrimPassword] = useState("");
    const [errorMessage, setErrorMessage] = useState('');
    const [showMessage, setShowMessage] = useState(false)
    const navigate = useNavigate();
    const [message, setMessage] = useState(null);
    const [type, setType] = useState(null)

    const handleRegisterNewUser = async (e) => {
        e.preventDefault();

        /*
        if (password !== confirmPassword) {
            setErrorMessage('As senhas não coincidem!');
            return;
        }
        
        try {
            const response = await axios.post('http://localhost:3000/auth/register', { email, password });
            console.log('Cadastro realizado', response.data);

            //adicionado
            // exibe mensagem de sucesso
            setShowMessage(true);

            setTimeout(() => {
                setShowMessage(false);
                navigate('/');
            }, 3000)

            //navigate('/');
        } catch (error) {
            console.error ('Erro ao cadastrar:', error.response?.data || error.message);
            setErrorMessage('Erro no cadastro. Tente novamente.');
        }*/
            setMessage(
                <>
                    <p><Link to='/register'>Clique Aqui para</Link></p>
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
            <form onSubmit={handleRegisterNewUser}>
                <div className={styles.inputForm}>
                    <FaAt className={styles.icon} />
                    <input
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        placeholder='Digite seu email'
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

                <div className={styles.inputForm}>
                    <FaLock className={styles.icon} />
                        <input 
                            type="password" 
                            value={confirmPassword} 
                            onChange={(e) => setConfrimPassword(e. target.value)} 
                            placeholder="Repita a senha"
                            required
                        />
                </div>
                {errorMessage && <p className={styles.msg}>{errorMessage}</p>}
                
                <button type='submit'>Registrar</button>
            </form>

            <p>
                Já possui uma conta? <Link to ="/login" className={styles.link}>Faça Login</Link>
            </p>

            {/** exibir modal quando showmessage for true */}
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