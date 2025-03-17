import { useState } from 'react';
import styles from './Home.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { FaAt, FaLock } from 'react-icons/fa';


function Home() {
    return (
        <div className={styles.home}>            
            <div className='button-container'>
                {/* Botão 1 */}
                <button className='text-button'>
                    Cuidados e dicas sobre hortas
                </button>

                {/* Botão 2 */}
                <button className='text-button'>
                    Compostagem
                </button>

                {/* Botão 3 */}
                <button className='text-button'>
                    Alimentação e receitas
                </button>
            </div>
        </div>
    );
}

export default Home;