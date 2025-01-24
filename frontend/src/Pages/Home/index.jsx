import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css"


function Home () {
    return (
        <section className={styles.home}>
            <div className={styles.cords}>
                <div className={styles.card}><h2>Editar Dados</h2></div>
                <div className={styles.card}><h2>Entrega de Resíduos</h2></div>
                <div className={styles.card}><h2>Dados da Estação</h2></div>
                <div className={styles.card}><h2>Informações</h2></div>
            </div>
            
        </section>
    )
}

export default Home