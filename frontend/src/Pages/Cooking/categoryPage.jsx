import { useParams, useNavigate } from "react-router-dom";
import styles from "./Cooking.module.css"

function CategoryPage() {
    const { categoryName } = useParams();
    const navigate = useNavigate();

    return (
        <div className={styles.categoryPage}>
            <h1>Categoria: {categoryName}</h1>
            <p>Aqui serão listados todos os artigos de {categoryName}.</p>
            <div className={styles.back}
                ><span onClick={() => navigate(-1)}>&#8592;Voltar</span>
            </div>
        </div>
        
        
    );
}

export default CategoryPage;
