import styles from './Container.module.css'
import background from '../../assets/images/background.svg'


function Container ({ children }) {
    return (
        
        <section className={styles.container}>
                    
            { children }
        </section>
    )
}

export default Container