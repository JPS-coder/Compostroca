import React,{ useState }from "react";
import { Link } from "react-router-dom";
import styles from "./Menu.module.css";


function Menu () {
    const [showMenu, setShowMenu ] = useState (false)
        
    const toggleMenu = () => {
            setShowMenu (!showMenu);
        };

    return (
        <section className={styles.menu}>
            <div className={styles.cards}>
                <Link to= "/edit"><div className={styles.card}>Editar Dados</div>
                </Link>
                <Link to = "/OrganicDelivery"><div className={styles.card}>Entrega de Resíduos</div></Link>
                <Link to = "/StationData"><div className={styles.card}>Dados da Estação</div></Link>
                <Link to = "/"><div className={styles.card}>Informações</div></Link>
            </div>
        </section>
    )
}

export default Menu