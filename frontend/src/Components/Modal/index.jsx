import React from "react";
import ReactDOM from "react-dom";
import styles from "./Modal.module.css";

const Modal = ({ children, onClose }) => {
    return ReactDOM.createPortal(
        <>
            <div className={styles.overlay} onClick={onClose}></div>
            <div className={styles.modal}>
                {children}
            </div>
        </>,
        document.body // O modal será inserido no <body>, fora do fluxo da página
    );
};

export default Modal;
