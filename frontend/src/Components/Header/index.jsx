import { Link } from 'react-router-dom';
import styles from './hearder.module.css';
import logo from '../../assets/compostroca_logo.png';
import { useState } from 'react';


function Header() {
    const [showMenu, setShowMenu ] = useState (false)
    const toggleMenu = () => {
        setShowMenu (!showMenu)
    }
    return (
        <header className={styles.header}>
            <img className={styles.logo} src={logo} alt='Logotipo compostroca'/>
            

        </header>
    )
}

export default Header