import styles from './Header.module.css';
import logo from '../../assets/logotipo.svg';
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';

function Header() {
    const [showMenu, setShowMenu ] = useState (false)
    
    const toggleMenu = () => {
        setShowMenu (!showMenu);
    };

      
const location = useLocation();

const noMenuPages = ['/', '/login', '/register', '/registerNewUser', '/info'];

const isLogoOnly = noMenuPages.includes(location.pathname.toLowerCase());


    return (
        <header className={styles.header}>
        
            <div className={styles.img}><img className={isLogoOnly ? styles.logoCenter : styles.logo} src={logo} alt='Logotipo compostroca'/></div>
            
            {!isLogoOnly && (
              
              <>
                <div
                    className={`${styles.menuButton} ${showMenu ? styles.close : ''}`}
                    onClick={toggleMenu}>
                    <span className={`${styles.linha} ${showMenu ? styles.linhaClose : ''}`}></span>
                    <span className={`${styles.linha} ${showMenu ? styles.linhaClose : ''}`}></span>
                    <span className={`${styles.linha} ${showMenu ? styles.linhaClose : ''}`}></span>
                </div>

                
                <nav
                className={`${styles.menuSandwich} ${ showMenu ? styles.show : ''}`}
                >
                    <Link to="/">Home</Link>
                    <Link to="/edit">Editar Dados</Link>
                    <Link to="/OrganicDelivery">Entrega de Resíduos</Link>
                    <Link to="/StationData">Dados da Estação</Link>
                    <Link to="/Info">Informaçoes</Link>   
                </nav>
      
            </>

    )}

        </header>
    );
};

export default Header;