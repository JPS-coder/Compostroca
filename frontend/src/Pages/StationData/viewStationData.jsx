import React from 'react';
import { useState, useEffect } from 'react';
import styles from './StationData.module.css';
import SearchModal from '../../Components/Modal/searchModal';
import axios from 'axios';

function ViewStationData({ data }) {
  const [showSearchModal, setShowSearchModal] = useState('');  
  return (
        
    <div className={styles.stationdata}>
      <div className={styles.inputForm}>
        <div className={styles.labelInput}>
          <label className={styles.labelView}>Nome da Estação</label>
          <div className={styles.displayBox}>{data.nameStation}</div>
        </div>
      </div>

      <div className={styles.inputForm}>
        <div className={styles.labelInput}>
          <label className={styles.labelView}>Volume da Estação</label>
          <div className={styles.displayBox}>{data.volStation}</div>
        </div>
      </div>

      <div className={styles.inputForm}>
        <div className={styles.labelInput}>
          <label className={styles.labelView}>Volume por Pessoa</label>
          <div className={styles.displayBox}>{data.volPerson}</div>
        </div>
      </div>

      <div className={styles.inputForm}>
        <div className={styles.labelInput}>
          <label className={styles.labelView}>Volume Total</label>
          <div className={styles.displayBox}>{data.volTotal}</div>
        </div>
      </div>

      <div className={styles.inputForm}>
        <div className={styles.labelInput}>
          <label className={styles.labelView}>Emissões evitadas <br/>de CO₂</label>
          <div className={styles.displayBox}>{data.co2Avoided}</div>
        </div>
      </div>
    </div>
  );
}

export default ViewStationData;
