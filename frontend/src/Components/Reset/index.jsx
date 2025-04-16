import { useState } from "react";
import styles from "./Reset.module.css";
import Messages from "../Messages"; // Certifique-se de ter esse componente

function Reset({ type, onCancel }) {
    const [email, setEmail] = useState("");
    const [step, setStep] = useState(type === "firstAccess" ? 1 : 2);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");
    const [message, setMessage] = useState(null);
    const [messageType, setMessageType] = useState(null);

    function handleEmailSubmit(e) {
        e.preventDefault();
        setMessage("Código enviado para o e-mail informado.");
        setMessageType("success");
        setStep(2);
    }

    function handlePasswordSubmit(e) {
        e.preventDefault();
        if (password !== confirmPassword) {
            setMessage("As senhas não coincidem.");
            setMessageType("error");
            return;
        }

        setMessage("Senha redefinida com sucesso!");
        setMessageType("success");
        setTimeout(() => {
            onCancel(); // Fecha o reset após a mensagem
        }, 2000);
    }

    return (
        <div className={styles.screenReset}>
            <Messages message={message} type={messageType} onClose={() => setMessage(null)} />

            <h2>{step === 1 ? "Confirme seu e-mail" : "Redefinir Senha"}</h2>

            {step === 1 ? (
                <form onSubmit={handleEmailSubmit}>
                    <input
                        type="email"
                        placeholder="Digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                    <button type="submit" className={styles.btn}>Enviar Código</button>
                </form>
            ) : (
                <form onSubmit={handlePasswordSubmit}>
                    <input
                        type="password"
                        placeholder="Nova senha"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                    <input
                        type="password"
                        placeholder="Confirme a senha"
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                        required
                    />
                    <button type="submit" className={styles.btn}>Alterar Senha</button>
                </form>
            )}

            <button className={styles.cancel} onClick={onCancel}>Voltar</button>
        </div>
    );
}

export default Reset;

