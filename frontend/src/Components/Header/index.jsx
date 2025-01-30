import styles from './Header.module.css';
import logo from '../../assets/logotipo.svg';
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';

function Header() {
    const [showMenu, setShowMenu ] = useState (false)
    const toggleMenu = () => {
        setShowMenu (!showMenu)
    };
    
const location = useLocation();
const noMenuPages = ['/', '/RegisterLogin'];
const isLogoOnly = noMenuPages.includes(location.pathname)

    return (
        <header className={styles.header}>
            <div className={styles.img}><img className={isLogoOnly ? styles.logoCenter : styles.logo} src={logo} alt='Logotipo compostroca'/></div>
            
            {!isLogoOnly && (
                <>
            
                <nav
                className={`${styles.menuSandwich} ${ showMenu ? styles.show : ''}`}
                onClick={toggleMenu}
                >
                    <Link to="/">Home</Link>
                    <Link to="/RegisterLogin">Editar Dados</Link>
                    <Link to="/OrganicDelivery">Entrega de Resíduos</Link>
                    <Link to="/StationData">Dados da Estação</Link>
                    <Link to="/Info">Informaçoes</Link>   
                </nav>
      
            <div
             className={styles.menuButton}
             onClick={toggleMenu}>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
        </>
    )}

        </header>
    )
}

export default Header