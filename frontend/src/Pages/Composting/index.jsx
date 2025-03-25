import styles from './Composting.module.css'
import { Link } from 'react-router-dom'

function Composting() {
    return (
        <div className={styles.composting}>
            <div>
                <h1>Compostagem</h1>
            </div>
            <div className={styles.btncomp}>
                <Link to="/GardenCare">
                    <button>Guia da Horta</button>
                </Link>
                <Link to="/Cooking">
                    <button>Alimentação e receitas</button>
                </Link>
            </div>

        </div>
    )
}

export default Composting;
