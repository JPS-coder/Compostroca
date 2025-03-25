import { useParams } from "react-router-dom";
import styles from "./Cooking.module.css"

function PostPage() {
    const { id } = useParams();

    return (
        <div style={{ padding: "20px", textAlign: "center" }}>
            <h1>Post {id}</h1>
            <p>Aqui será exibido o conteúdo completo do post com ID {id}.</p>
        </div>
    );
}

export default PostPage;
