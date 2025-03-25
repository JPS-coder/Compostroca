import { Link } from "react-router-dom";
import styles from './CategorySection.module.css';

function CategorySection({ title, posts }) {
    return (
        <div className={styles.category}>
            <h3>{title}</h3>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>
                        <Link to={`/post/${post.id}`}>{post.title}</Link>
                    </li>
                ))}
            </ul>
            <Link to={`/category/${title.toLowerCase()}`}>
                <button className={styles.viewMore}>Ver mais</button>
            </Link>
        </div>
    );
}

export default CategorySection;