import { useState } from 'react';
import styles from './Info.module.css';
import { useNavigate, Link } from 'react-router-dom';
import { FaAt, FaLock } from 'react-icons/fa';


function Info() {
    return (
        <div className='Info'>            
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

export default Info;