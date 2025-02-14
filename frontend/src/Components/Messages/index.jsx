import React, { useEffect, useState } from "react";
import styles from './Messages.module.css'
import logo from '../../assets/logotipo.svg'

function Messages ({ message, type }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        if (message) {
            setIsVisible(true);
            const timer = setTimeout(() => {
                setIsVisible(false);
            }, 3000);

            return () => clearTimeout(timer);
        }
    }, [message])

    if (!isVisible || !message) {
        return null;
    }

    const messageClass = type === 'sucess' ? 'sucess-message' : 'error-message';

    return (
        <div className={styles.modalOverlay}>
            <div className={`${styles.message} &{styles.messageClass}`}>
                {message}
            </div>
        </div>
    );
}

export default Messages;