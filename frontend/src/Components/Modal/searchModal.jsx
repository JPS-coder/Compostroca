import Modal from ".";
import styles from './Modal.module.css';
import { useState } from 'react';
import { useNavigate } from "react-router-dom";

const SearchModal = ({ onClose, onSelect }) => {
    const [searchName, setSearchName] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        if (!searchName.trim()) return;

        if (onSelect) {
          onSelect(searchName)
          onClose(); // fecha o modal
        } else {
          navigate(`/stationData/view/${searchName}`);
          onClose();
        }
      };

      return (
        <Modal onClose={onClose}>
          <div className={styles.modalContent}>
          <h3>Buscar Estação</h3>
          <input
            type="text"
            value={searchName}
            onChange={(e) => setSearchName(e.target.value)}
            placeholder="Digite o Nome da estação"
            className={styles.searchInput}
          />
          <div className={styles.modalButtons}>
            <button onClick={handleSearch}>Buscar</button>
            <button onClick={onClose}>Cancelar</button>
          </div>
        </div>
    </Modal>
  );
};

export default SearchModal;

