import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";


function Home () {
    return (
<<<<<<< HEAD
        <section className={styles.home}>
            <div className={styles.cards}>
                <Link to= "RegisterLogin"><div className={styles.card}>Editar Dados</div>
                </Link>
                <Link to = "OrganicDelivery"><div className={styles.card}>Entrega de Resíduos</div></Link>
                <Link to = "StationData"><div className={styles.card}>Dados da Estação</div></Link>
                <Link to = "Info"><div className={styles.card}>Informações</div></Link>
=======
        <section className={styles.cards}>
            <div className={styles.cards}>
                <div className={styles.card}><h2>Editar Dados</h2></div>
                <div className={styles.card}><h2>Entrega de Resíduos</h2></div>
                <div className={styles.card}><h2>Dados da Estação</h2></div>
                <div className={styles.card}><h2>Infomações</h2></div>
>>>>>>> 6e889b6877fc8975a36929568fbac7f7ba4f4e35
            </div>
        </section>
    )
}

export default Home