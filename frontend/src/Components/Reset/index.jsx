import { useState } from "react";
import styles from "./Reset.module.css";


function Reset(props) {
    const [email, setEmail] = useState("");
    const [step, setStep] = useState(props.type === "firstAccess" ? 1 : 2);
    const [password, setPassword] = useState("");
    const [confirmPassword, setConfirmPassword] = useState("");

    function handleEmailSubmit() {
        console.log("Email enviado para: ", email);
        setStep(2)
    }

    function handlePasswordSubmit() {
        if (password!== confirmPassword) {
            alert ("As senhas não coincideem");
            return;
        }
        console.log("Senhss redefinida com sucesso!")
    }
    return (
        <div>
            {step === 1 && (
                <div>
                    <h2>Confirme seu e-mail</h2>
                    <input
                        type="email"
                        placholder="digite seu e-mail"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                     />
                     <button onClick={handleEmailSubmit} className="btn">
                        Enviar código
                    </button>
                </div>
            )}
            {step === 2 && (
            <div className="reset-form">
                <h2>Redefinir senha</h2>
                <input
                    type="password"
                    placeholder="Nova senha"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
                <input
                    type="password"
                    placeholder="Confirme a senha"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    className="mt-2"
                />
                <button onClick={handlePasswordSubmit} className="btn">
                    Confirmar senha
                </button>
                </div>
            )}

        </div>
    )
}

export default Reset;
