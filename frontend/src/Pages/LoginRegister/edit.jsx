import { useState } from "react";
import styles from './LoginRegister.module.css';
import Messages from "../../Components/Messages";
import { useForm } from "react-hook-form"

function Edit() {
    const { register, handleSubmit, reset } = useForm();

    const [message, setMessage] = useState(null)
    const [type, setType] = useState(null)
    const [showMessage, setShowMessage] = useState(false)

    const onSubmit = async(data) => {
        console.log(data);
        setMessage(
            <>
                Dados salvos <br/>com sucesso.
            </>)
        setType('success');
        setShowMessage(true);
        reset();
    };

    
    
    return (
        <div className={`${styles.screenLoginRegister} ${styles.cad} ${styles.edit}`}>
            <Messages
                message={message}
                type={type}
                onClose={() => {setShowMessage(false);
                setMessage(null);
                }}
            />
            <h2 className={styles.title}>Editar Dados</h2>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label>
                            Nome:
                        </label>
                        <input type="text" {...register("name")} />
                
                    </div>
                   
                </div>

                <div className={styles.inputForm}>
                        <div className={styles.labelInput}>
                            <label>
                                Endereço:
                            </label>
                            <input
                                type="text" {...register("address")}/>
                                                        
                        </div>       
                </div>

                <div className={styles.inputForm}>
                    <div className={styles.labelInput}>
                        <label>
                            Telefone:
                        </label>
                        <input
                            type="tel"{...register("phone")} />
                            
                    </div>
                </div>

                <div className={styles.inputForm}>
                        <div className={styles.labelInput}>
                            <label>
                                Email:
                            </label>
                            <input
                                type="email" {...register("email")}/>
                                
                        </div>
                       
                </div>
                <div className={styles.inputForm}>
                        <div className={styles.labelInput}>
                            <label>
                                Senha:
                            </label>
                            <input
                                type="text" {...register("password")}/>
                        </div>
                       
                </div>

                <button className={styles.cad} type='submit'>Salvar</button>
            </form>
        </div>
    )

}

export default Edit;