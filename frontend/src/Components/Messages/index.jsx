import React, { useState } from "react";
import styles from './Messages.module.css'
import logo from '../../assets/logotipo.svg'

const Message = ({ type, message, onClose }) => {
    return (
        <div className={`${styles.modal} ${styles[type]}`}>
            <div className={styles.modalContent}>
                <img src={logo} alt="Logo da Empresa" className={styles.logo} />
                <p>{message}</p>
                {type !== 'newUser' && (
                <button className={styles.closeButton} onClick={onClose}>X</button>
            )}
                </div>
        </div>
    );
};

const Messages = () => {
    const [showMessage, setShowMessage] = useState(false);
    const [messageType, setMessageType] = useState('');
    const [messageContent, setMessageContent] = useState('')

    const showMessageNewUser = () => {
        setMessageType('newUser');
            setMessageContent('Obrigado por se juntar à');
            setShowMessage(true);
    };

    const showMessageRegister = () => {
        setMessageType('register');
            setMessageContent('Cadastro Realizado com Sucesso!');
            setShowMessage(true);
    };

    const showMessageEdit = () => {
        setMessageType('edit');
            setMessageContent('Dados salvo com sucesso');
            setShowMessage(true);
    };

    const showMessageScan = () => {
        setMessageType('scan');
            setMessageContent('Escaneamento bem sucedido!');
            setShowMessage(true);
    };

    return (
        <div>
            <button onClick={showMessageNewUser}>Mensagem 1</button>
            <button onClick={showMessageRegister}>Mensagem 2</button>
            <button onClick={showMessageEdit}>Mensagem 3</button>
            <button onClick={showMessageScan}>Mensagem 4</button>

            {showMessage && (
                <Message type={messageType} message={messageContent} onClose={closeMessage} />
            )}
        </div>
    ) 
}

export default Messages;