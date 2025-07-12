import styles from './Cooking.module.css'
import { Link } from 'react-router-dom'
import CategorySection from '../../Components/CategorySection';

const latestPost = {
    id: 1,
    title: "Benefícios de uma alimentação saudável",
    summary: "Uma alimentação equilibrada melhora sua saúde e bem-estar...",
    category: "nutrition"
};

const categories = {
    nutrition: [
        { id: 2, title: "Como reduzir o consumo de açúcar" },
        { id: 3, title: "Dicas para uma dieta equilibrada" },
    ],
    recipe: [
        { id: 7, title: "Pão caseiro sem fermento" },
        { id: 8, title: "Salada de quinoa com legumes" },
    ]
};

function Cooking() {
    return (
        <div className={styles.cooking}>

            <div className={styles.mainContent}>
                    <h2>{latestPost.title}</h2>
                    <p>{latestPost.summary}</p>
                    <Link to={`/post/${latestPost.id}`}>Ler mais</Link>
            </div>
            <div className={styles.sidebar}>
                    <CategorySection title="Alimentação" posts={categories.nutrition} />
                    <CategorySection title="Receitas" posts={categories.recipe} />
            </div>

                        
            <div className={styles.btncook}>

                <Link to="/compostagem">
                    <button>Compostagem</button>
                </Link>
                    
                <Link to="/guia-da-horta">
                    <button>Guia da Horta</button>
                </Link>

            </div>

        </div>
    )
}


export default Cooking;