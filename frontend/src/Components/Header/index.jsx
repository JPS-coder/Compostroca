import styles from './header.module.css';
import logo from '../../assets/logotipo.svg';
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom'

function Header() {
    const [showMenu, setShowMenu ] = useState (false)
    const toggleMenu = () => {
        setShowMenu (!showMenu)
    };
<<<<<<< HEAD
    
const location = useLocation();
=======
const location = useLacation();
>>>>>>> 6e889b6877fc8975a36929568fbac7f7ba4f4e35
const noMenuPages = ['/', '/RegisterLogin'];
const isLogoOnly = noMenuPages.includes(location.pathname)

    return (
        <header className={styles.header}>
<<<<<<< HEAD
            <div className={styles.img}><img className={isLogoOnly ? styles.logoCenter : styles.logo} src={logo} alt='Logotipo compostroca'/></div>
            
            {!isLogoOnly && (
                <>
            
=======
            <img className={styles.logo} src={logo} alt='Logotipo compostroca'/>

            {!isLogoOnly && (
                
>>>>>>> 6e889b6877fc8975a36929568fbac7f7ba4f4e35
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
<<<<<<< HEAD
=======
                ) 
            };
            

            
>>>>>>> 6e889b6877fc8975a36929568fbac7f7ba4f4e35
      
            <div
             className={styles.menuButton}
             onClick={toggleMenu}>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
                <span className={styles.linha}></span>
            </div>
<<<<<<< HEAD
        </>
    )}
=======
        
            

>>>>>>> 6e889b6877fc8975a36929568fbac7f7ba4f4e35

        </header>
    )
}

export default Header