import styles from './header.module.css';
import logo from '../../assets/logotipo.svg';
import { useState } from 'react';
import { Link } from 'react-router-dom'

function Header() {
    const [showMenu, setShowMenu ] = useState (false)
    const toggleMenu = () => {
        setShowMenu (!showMenu)
    }
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt='Logotipo compostroca'/>
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


        </header>
    )
}

export default Header