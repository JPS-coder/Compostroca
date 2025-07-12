import { useState } from "react";
import { useForm } from "react-hook-form"
import styles from "./Reset.module.css";
import Messages from "../Messages"; 


function Reset({ type, onCancel }) {
    //const [email, setEmail] = useState("");
    const [step, setStep] = useState(type === "firstAccess" ? 1 : 2);
    //const [password, setPassword] = useState("");
    //const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);

    const { register, handleSubmit, reset, watch , formState: { errors }, } = useForm();



    const handleEmailSubmit = (data) => { //handleEmailSubmit(e) e.preventDefault();
        console.log(data.email);
        setMessage("Código enviado para o e-mail informado.");
        setMessageType("success");
        setStep(2);
        reset();
    };

    const handlePasswordSubmit = (data)  =>  {// handlePasswordSubmit(e)e.preventDefault();
        if (data.password !== data.confirmPassword) {
            setMessage("As senhas não coincidem.");
            setMessageType("error");
            return;
        }

        setMessage("Senha redefinida com sucesso!");
        setMessageType("success");
        setTimeout(() => {
            reset();
            onCancel();
        }, 2000);
    }

    return (
        <div className={styles.screenReset}>
            <Messages message={message} type={messageType} onClose={() => setMessage(null)} />

            <h2>{step === 1 ? "Confirme seu e-mail" : "Redefinir Senha"}</h2>

            {step === 1 ? (
                <form onSubmit={handleSubmit(handleEmailSubmit)}> {/** onSubmit={handleEmailSubmit} */}
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        {...register("email", { 
                            required: "O e-mail é obrigatório.",
                            pattern: {
                                value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                message: "Digite um e-mail válido.", }, })}
                        />
                        {/*value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />*/}
                     {errors.email && <p className={styles.error}>{errors.email.message}</p>}
                    <button type="submit" className={styles.btn}>Enviar Código</button>
                </form>
            ) : (
                <form onSubmit={handleSubmit(handlePasswordSubmit)}> {/** onSubmit={handlePasswordSubmit}> */}
                    <input
                        type="password"
                        placeholder="Nova senha"
                        {...register("password", 
                            { required: "A senha é obrigatória.",
                                minLength: {
                                value: 6,
                                message: "A senha deve ter no mínimo 6 caracteres.",
              },})}
                        />

                        {/*value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />*/}

                        {errors.password && <p className={styles.error}>{errors.password.message}</p>}

                    <input
                        type="password"
                        placeholder="Confirme a senha"
                        {...register("confirmPassword", 
                            { required: "Confirme a senha.",
                                validate: (value) =>
                                value === watch("password") || "As senhas não coincidem.",})}
                        />
                        {/*value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />*/}

                    {errors.confirmPassword && <p className={styles.error}>{errors.confirmPassword.message}</p>}

                    <button type="submit" className={styles.btn}>Alterar Senha</button>
                </form>
            )}

            <button className={styles.cancel} onClick={onCancel}>Voltar</button>
        </div>
    );
}

export default Reset;

