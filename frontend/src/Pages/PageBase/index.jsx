import Header from '../../Components/Header'
import Container from '../../Components/Container'
import Footer from '../../Components/Footer'
import { Outlet } from 'react-router-dom'
import styles from './PageBase.module.css'
import background from '../../assets/background.svg'


function PageBase() {
    return(
        <main className={styles.backgroundWrapper}>
            {/*<div className={styles.backgroundImage}></div> */}
            
            <Header />
            <Container>
                <Outlet />
            </Container>
            <Footer />
           
        </main>
    )
}

export default PageBase
