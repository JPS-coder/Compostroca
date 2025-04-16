import { Link } from 'react-router-dom'
import logo from '../../assets/logotipo.svg';
import styles from './Messages.module.css'

function Messages({ message, extraMessage, type, onClose, actionText, onAction, children }) {
    if (!message) return null;

    const messageClass = type === 'success' ? styles.successMessage : styles.console.errorMessage;

    return (
        <div className={styles.modalOverlay}>
            <div className={styles.modalContent}>
            {extraMessage && <p className={styles.extraMessage}>{extraMessage}</p>}
                <div className={`${styles.imgContainer} ${extraMessage ? styles.customImage : ""}`}>
                    <img src={logo} alt="Logo" className={styles.modalImage}/>
                </div>
                <h3 className={messageClass}>{message}</h3>

                <div className={styles.modalActions}>
                    {onAction && (
                        <a href={onAction} className={styles.actionLink}>
                            {actionText}
                        </a>
                    )}
                    {children && <div className={styles.customActions}>{children}</div>}

                    <Link to='/menu'><button className={styles.closeButton} onClick={onClose}>X</button></Link>
                    {actionText}
                </div>
            </div>
        </div>
    )
    
}

export default Messages;