import styles from './GardenCare.module.css'
import { Link } from 'react-router-dom'

function GardenCare() {
    return (
        <div className={styles.garden}>
            <div>
                <h1>Guia da Horta</h1>
            </div>
            <div className={styles.btngarden}>
                <Link to="/Composting">
                    <button>Compostagem</button>
                </Link>
         
                <Link to="/Cooking">
                    <button>Alimentação e Receitas</button>
                </Link>

            </div>

        </div>
    )
}

export default GardenCare;
