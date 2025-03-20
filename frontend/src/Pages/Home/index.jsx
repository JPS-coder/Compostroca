import { useState } from 'react';
import styles from './Home.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { FaAt, FaLock } from 'react-icons/fa';


function Home() {
    return (
        <div className={styles.home}>            
            <div className={styles.buttoncontainer}>
                {/* Botão 1 */}
                <button className={styles.textbutton}>
                    Cuidados e dicas sobre hortas
                </button>

                {/* Botão 2 */}
                <button className= {styles.textbutton}>
                    Compostagem
                </button>

                {/* Botão 3 */}
                <button className={styles.textbutton}>
                    Alimentação e receitas
                </button>
            </div>
        </div>
        
    );
}

export default Home;