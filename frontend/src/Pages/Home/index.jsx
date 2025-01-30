import React from "react";
import { Link } from "react-router-dom";
import styles from "./home.module.css";


function Home () {
    return (
        <section className={styles.home}>
            <div className={styles.cards}>
                <Link to= "RegisterLogin"><div className={styles.card}>Editar Dados</div>
                </Link>
                <Link to = "OrganicDelivery"><div className={styles.card}>Entrega de Resíduos</div></Link>
                <Link to = "StationData"><div className={styles.card}>Dados da Estação</div></Link>
                <Link to = "Info"><div className={styles.card}>Informações</div></Link>
            </div>
        </section>
    )
}

export default Home