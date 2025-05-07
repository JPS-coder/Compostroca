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
            <h2>Sistema de Cadastro</h2>
            <div className={styles.cards}>

                {/* 
                <Link to= "/editar-dados"><div className={styles.card}>Editar Dados</div>
                </Link>
                 */}

                <Link to = "/entrega-residuos"><div className={styles.card}>Resíduos</div></Link>
                <Link to = "/dados-estacao-cadastro"><div className={styles.card}>Estação/Comunidade</div></Link>
                <Link to = "/alimentacao-cadastro"><div className={styles.card}>Alimentação</div></Link>
                <Link to = "/receita-cadastro"><div className={styles.card}>Receitas</div></Link>
                <Link to = "/"><div className={styles.card}>Informações</div></Link>
            </div>
        </section>
    )
}

export default Menu