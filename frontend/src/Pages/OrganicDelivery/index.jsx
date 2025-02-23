import { useState } from 'react'
import styles from './OrganicDelivery.module.css';
import Messages from '../../Components/Messages';

function OrganicDelivery() {
    const [message, setMessage] = useState(null)
    const [type, setType] = useState(null)

    const handleOrganicDelivery = async (e) => {
        

        
        setMessage(
            <>
                Escaneamento <br/>bem sucedido
                <p>Entrega<br /> confirmada</p>
            </>)
        setType('success');
        setRedirectTo('/');
        setModalVisible(true);
    }

    return (
        <><div>
            <Messages
                message={message}
                type={type}
                onClose={() => setMessage(null)} />
        </div>
        <button className={styles.cad} onClick={handleOrganicDelivery}>Teste Modal Mensagem</button></>
    )   
}

export default OrganicDelivery;