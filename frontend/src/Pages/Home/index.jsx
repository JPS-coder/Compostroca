import styles from './Home.module.css';
import { Link } from 'react-router-dom';


function Home() {
    return (
        <div className={styles.home}>            
            <div className={styles.buttoncontainer}>
                <Link to="guia-da-horta">
                    <button className={styles.textbutton}>
                        Guia da Horta
                    </button>
                </Link>

                <Link to="compostagem">
                    <button className= {styles.textbutton}>
                        Compostagem
                    </button>
                </Link>

                <Link to="alimentacao-receitas">
                    <button className={styles.textbutton}>
                        Alimentação e Receitas
                    </button>
                </Link>
            </div>
        </div>
        
    );
}

export default Home;