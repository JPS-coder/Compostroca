import { useState } from 'react';
import styles from './LoginRegister.module.css';
import Messages from '../../Components/Messages';
import { useForm } from 'react-hook-form';


function Register() {
    const { register, handleSubmit, reset } = useForm();
    const [message, setMessage] = useState(null);
    const [type, setType] = useState(null);
    const [redirectTo, setRedirectTo] = useState(null);
    const [modalVisible, setModalVisible] = useState(false);

    const onSubmit = async (data) => {
        console.log(data)


        setMessage(
            <>
                Cadastro realizado <br/>com sucesso.<br/>
                Muito Obrigado!
            </>)
        setType('success');
        setRedirectTo('/menu');
        setModalVisible(true);

        reset();
    }

    

    return (
        <div className={`${styles.screenLoginRegister} ${styles.cad}`}>
            
            <Messages
                message={message}
                type={type}
                onClose={() => setMessage(null)}
            />

            <h2 className={styles.title}>Cadastro</h2>
            
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label>Nome:</label>
                        <input
                            type="text"
                            {...register("name", { required: true })}  
                        />
                     
                    </div>
                
                </div>
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label>Telefone:</label>
                        <input
                            type="tel"
                            {...register("phone", { required: true })}
                        />
                    
                    </div>
                    
                </div>

                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label>Endereço:</label>
                        <input
                            type="text"
                            {...register("address", { required: true })}
                        />

                    </div>
                       
                </div>


                <button className={styles.cad} type='submit'>Enviar</button>
            </form>

        </div>
    );
    
};

export default Register;