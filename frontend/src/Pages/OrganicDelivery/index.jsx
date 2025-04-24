import { useState } from 'react'
import styles from './OrganicDelivery.module.css'
import Messages from '../../Components/Messages';
import SearchModal from '../../Components/Modal/searchModal'
import PhotoUploader from './photoUploader'
import { FaSearch} from 'react-icons/fa'


function OrganicDelivery() {
    const [station, setStation] = useState(null);
    const [weight, setWeight] = useState('');
    const [photos, setPhotos] = useState([]);
    const [showSearch, setShowSearch] = useState(false);
    const [showSummary, setShowSummary] = useState(false);
    const [message, setMessage] = useState(null);
    const [type, setType] = useState('');
        
    const handleAdvance = () => {
        setShowSummary(true);
    };

    return (
        <div className={styles.delivery}>
            {message && (
                <Messages
                    message={message}
                    type={type}
                    onClose={() => setMessage(null)}
                />
            )}

            {!showSummary ? (
                <>
                    <h2>Entrega de Resíduos</h2>
                    <button onClick={() => setShowSearch(true)} className={styles.searchBtn}>
                        <span>{station ? station.name : "Buscar Estação" }</span>
                        <FaSearch className={styles.searchIcon}/>
                    </button>
   


                    <div className={styles.labelInput}>
                        <label>Nome da Estação</label>
                        <input type="text" value={station} onChange={(e) => setStation(e.target.value)} 
                        />
                    </div>

                    <div className={styles.labelInput}>
                        <label>Peso (gramas)</label>
                        <input type="number" value={weight} onChange={(e) => setWeight(e.target.value)} />
                    </div>

                    <PhotoUploader
                        photos={photos}
                        setPhotos={setPhotos}
                    />


                    <button onClick={handleAdvance}>Avançar</button>

                    {showSearch && (
                        <SearchModal onClose={() => setShowSearch(false)}
                        onSelect={(name) => setStation(name)} 
                        mode="fill" />
                    )}
                </>
            ) : (
                <>
                    <h2>Resumo da Entrega</h2>
                    <div className={styles.deliveryInfo}>
                        <p><strong>Estação:</strong> {station}</p>
                        <p><strong>Peso:</strong> {weight}g</p>
                        <p><strong>Data:</strong> {new Date().toLocaleDateString()}</p>
                    </div>
                    <div className={styles.summaryPhotos}>
                        {photos.map((photo, index) => (
                            <div key={index} className={styles.photoSumaryRow}>
                                <img
                                    src={photo.file ? URL.createObjectURL(photo.file) : ''}
                                    alt={photo.title}
                                    className={styles.photThunnail}
                                />
                                <p className={styles.photoTitle}>{photo.title}</p>
                            </div>
                        ))}
                    </div>

                    <div className={styles.qrcodePlaceholder}>
                        <p>[ QR Code para confirmação ]</p>
                    </div>
                    
                    {/*
                    Decidir se vai colocar um botao de confirmar (como o ex. abaixo) ou o qrcode
                    <button onClick={handleConfirmDelivery} className={styles.confirmBtn}>
                        Confirmar Entrega
                    </button>*/}
                </>
            )}
        </div>
    );
}

export default OrganicDelivery;

 