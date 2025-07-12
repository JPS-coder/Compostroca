import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './OrganicDelivery.module.css';
import Messages from '../../Components/Messages';
import SearchModal from '../../Components/Modal/searchModal';
import PhotoUploader from './photoUploader';
import { FaSearch } from 'react-icons/fa';

function OrganicDelivery() {
  const { register, handleSubmit, reset } = useForm();
  const [photos, setPhotos] = useState([]);
  const [formData, setFormData] = useState(null);
  const [showSearch, setShowSearch] = useState(false);
  const [showSummary, setShowSummary] = useState(false);
  const [message, setMessage] = useState(null);
  const [type, setType] = useState('');

  const onSubmit = (data) => {
    setFormData(data);
    setShowSummary(true);
    reset(); // limpa os campos do formulário
  };

  const handleCancel = () => {
    setShowSummary(false);
    setFormData(null);
    setPhotos([]);
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

          <button
            onClick={() => setShowSearch(true)}
            className={styles.searchBtn}
          >
            <span>
              {formData?.station ? formData.station : 'Buscar Estação'}
            </span>
            <FaSearch className={styles.searchIcon} />
          </button>

          <form onSubmit={handleSubmit(onSubmit)}>
            <div className={styles.labelInput}>
              <label>Nome da Estação</label>
              <input
                type="text"
                {...register('station', { required: 'Campo obrigatório' })}
              />
            </div>

            <div className={styles.labelInput}>
              <label>Peso (gramas)</label>
              <input
                type="number"
                {...register('weight', { required: 'Campo obrigatório' })}
              />
            </div>

            <PhotoUploader photos={photos} setPhotos={setPhotos} />

            <button type="submit">Avançar</button>
          </form>

          {showSearch && (
            <SearchModal
              onClose={() => setShowSearch(false)}
              onSelect={(name) =>
                setFormData((prev) => ({ ...prev, station: name }))
              }
              mode="fill"
            />
          )}
        </>
      ) : (
        <>
          <h2>Resumo da Entrega</h2>

          <div className={styles.deliveryInfo}>
            <p>
              <strong>Estação:</strong> {formData?.station}
            </p>
            <p>
              <strong>Peso:</strong> {formData?.weight}g
            </p>
            <p>
              <strong>Data:</strong> {new Date().toLocaleDateString()}
            </p>
          </div>

          <div className={styles.summaryPhotos}>
            {photos.map((photo, index) => (
              <div key={index} className={styles.photoSumaryRow}>
                <img
                  src={
                    photo.file ? URL.createObjectURL(photo.file) : ''
                  }
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

          <button onClick={handleCancel} className={styles.cancelBtn}>
            Voltar
          </button>
        </>
      )}
    </div>
  );
}

export default OrganicDelivery;
