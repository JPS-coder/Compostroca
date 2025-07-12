import { useState } from 'react';
import { FaCamera, FaImage } from 'react-icons/fa';
import Messages from '../../Components/Messages';
import styles from './OrganicDelivery.module.css';


function PhotoUploader({ photos, setPhotos }) {
  const [selectedPhoto, setSelectedPhoto] = useState(null);
  const [photoTitle, setPhotoTitle] = useState('');
  const [message, setMessage] = useState(null);

  const handleImageSelect = (file) => {
    setSelectedPhoto(file);
  };

  const handleAddPhoto = () => {
    if (selectedPhoto && photoTitle.trim()) {
      setPhotos([...photos, { file: selectedPhoto, title: photoTitle }]);
      setSelectedPhoto(null);
      setPhotoTitle('');
      setMessage('Foto adicionada com sucesso!');
    }
  };

  const handleCancel = () => {
    setMessage(null);
    setSelectedPhoto(null);
    setPhotoTitle('');
  };

  const handleAddAnother = () => {
    setMessage(null);
  };

  return (
    <div className={styles.photosSection}>
      <h3>Carregar Foto</h3>

      <div className={styles.iconRow}>
        <label className={styles.iconButton}>
          <FaImage />
          <input
            type="file"
            accept="image/*"
            style={{ display: 'none' }}
            onChange={(e) => handleImageSelect(e.target.files[0])}
          />
        </label>

        <label className={styles.iconButton}>
          <FaCamera />
          <input
            type="file"
            accept="image/*"
            capture="environment"
            style={{ display: 'none' }}
            onChange={(e) => handleImageSelect(e.target.files[0])}
          />
        </label>
      </div>

      {selectedPhoto && (
        <>
          <input
            type="text"
            placeholder="Título da foto"
            value={photoTitle}
            onChange={(e) => setPhotoTitle(e.target.value)}
          />
          <button onClick={handleAddPhoto}>Adicionar</button>
        </>
      )}

      <Messages
        message={message}
        type="success"
        onClose={handleCancel}
      >
        <div className={styles.customButtons}>
          <button onClick={handleCancel}>Cancelar</button>
          <button onClick={handleAddAnother}>Adicionar mais</button>
        </div>
      </Messages>
    </div>
  );
}


export default PhotoUploader;
