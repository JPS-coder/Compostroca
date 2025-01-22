import styles from './header.module.css';
import logo from '../../assets/logotipo.svg';
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