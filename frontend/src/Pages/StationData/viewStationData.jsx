import React from 'react';
import styles from './StationData.module.css';

function ViewStationData({ data }) {
  return (
    <div className={styles.stationdata}>
      <h2>Dados da Comunidade</h2>

      <div className={styles.inputForm}>
        <div className={styles.labelInput}>
          <label>Nome da Estação</label>
          <div className={styles.displayBox}>{data.nameStation}</div>
        </div>
      </div>

      <div className={styles.inputForm}>
        <div className={styles.labelInput}>
          <label>Volume da Estação</label>
          <div className={styles.displayBox}>{data.volStation}</div>
        </div>
      </div>

      <div className={styles.inputForm}>
        <div className={styles.labelInput}>
          <label>Volume por Pessoa</label>
          <div className={styles.displayBox}>{data.volPerson}</div>
        </div>
      </div>

      <div className={styles.inputForm}>
        <div className={styles.labelInput}>
          <label>Volume Total</label>
          <div className={styles.displayBox}>{data.volTotal}</div>
        </div>
      </div>

      <div className={styles.inputForm}>
        <div className={styles.labelInput}>
          <label>Emissões evitadas de CO₂</label>
          <div className={styles.displayBox}>{data.co2Avoided}</div>
        </div>
      </div>
    </div>
  );
}

export default ViewStationData;
