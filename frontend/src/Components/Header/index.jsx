import styles from './Header.module.css';
import logo from '../../assets/images/logotipo.svg';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';

function Header() {
    const [showMenu, setShowMenu ] = useState (false)
    const location = useLocation();
    
    const toggleMenu = () => {
        setShowMenu (!showMenu);
    };
 

    const noMenuPages = ['/', '/login', '/register', '/menu', '/registerNewUser', '/cooking', '/composting', '/gardencare'];

    const isLogoOnly = noMenuPages.includes(location.pathname.toLowerCase()) || location.pathname.startsWith('/category/') || location.pathname.startsWith('/post/');

    useEffect(() => {
        setShowMenu(false);
    }, [location.pathname]);

    return (
        <header className={`${styles.header} ${isLogoOnly ? styles.headerCenter : ''}`}>
        
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
                    <Link to="/Menu">Menu</Link> 
                    <Link to="/" onClick={() => setShowMenu(false)}>Informaçôes</Link>
                    <Link to="/edit" onClick={() => setShowMenu(false)}>Editar Dados</Link>
                    <Link to="/OrganicDelivery" onClick={() => setShowMenu(false)}>Entrega de Resíduos</Link>
                    <Link to="/StationData" onClick={() => setShowMenu(false)}>Dados da Estação</Link>    
                </nav>
            </>
    )}
        </header>
    );
};

export default Header;