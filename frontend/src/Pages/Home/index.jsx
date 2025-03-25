import { useState } from 'react';
import styles from './Home.module.css';
import { Link } from 'react-router-dom';
import { FaAt, FaLock } from 'react-icons/fa';


function Home() {
    return (
        <div className={styles.home}>            
            <div className={styles.buttoncontainer}>
                {/* Botão 1 */}
                <Link to="GardenCare">
                    <button className={styles.textbutton}>
                        Guia da Horta
                    </button>
                </Link>

                {/* Botão 2 */}
                <Link to="Composting">
                    <button className= {styles.textbutton}>
                        Compostagem
                    </button>
                </Link>

                {/* Botão 3 */}
                <Link to="Cooking">
                    <button className={styles.textbutton}>
                        Alimentação e Receitas
                    </button>
                </Link>
            </div>
        </div>
        
    );
}

export default Home;