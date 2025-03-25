import { useParams } from "react-router-dom";
import styles from "./Cooking.module.css"

function CategoryPage() {
    const { categoryName } = useParams();

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Categoria: {categoryName}</h1>
            <p>Aqui serão listados todos os artigos de {categoryName}.</p>
        </div>
    );
}

export default CategoryPage;
