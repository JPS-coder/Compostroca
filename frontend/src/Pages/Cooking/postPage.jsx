import { useParams, useNavigate} from "react-router-dom";
import styles from "./Cooking.module.css"

function PostPage() {
    const { id } = useParams();
    const navigate = useNavigate();

    return (
        <div >
            <h1>Post {id}</h1>
            <p>Aqui será exibido o conteúdo completo do post com ID {id}.</p>
            <div className={styles.back}>
                <span onClick={() => navigate(-1)}>&#8592;Voltar</span>
            </div>
        </div>
    );
}

export default PostPage;
