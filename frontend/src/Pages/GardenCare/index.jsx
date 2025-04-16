import styles from './GardenCare.module.css'
import { Link } from 'react-router-dom'
import minVideo from '../../assets/minVideo.png';

const videos = [
        {
        id: 1,
        title: "Dicas para uma horta saudável",
        description: "Cuide de sua horta com essas dicas, para deixá-la saudável e produtiva.",
        url: "#"
    },
    {
        id: 2,
        title: "Inseticidas Naturais",
        description: "Aprenda a fazer esse inseticida natural para eliminar pragas e doenças.",
        url: "#"
    },
    {
        id: 3,
        title: "Qual tipo solo, você tem na horta?",
        description: "Truques simples para identificar seu solo",
        url: "#"
    }
];

const channelUrl = "#"; // Link do canal!


function GardenCare() {
    return (
        <div className={styles.garden}>
            <div>
                <h1>Guia da Horta</h1>
            </div>
            <div className={styles.videoList}>
                {videos.map(video => (
                    <div key={video.id} className={styles.videoItem}>
                        <a href={video.url} target="_blank" rel="noopener noreferrer">
                            <img src={minVideo} alt={video.title} className={styles.thumbnail} />
                        </a>
                        <div className={styles.textContent}>
                            <h3>{video.title}</h3>
                            <p>{video.description}</p>                   
                        </div>
                    </div>
                    
                ))}
                <a href={channelUrl} target="_blank" rel="noopener noreferrer" className={styles.moreLink}>
                    Ver mais →
                </a>
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

