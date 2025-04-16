import styles from './Composting.module.css'
import { Link } from 'react-router-dom'
import minVideo from '../../assets/minVideo.png';

const videos = [
    {
    id: 1,
    title: "O que é compostagem?",
    description: "Conheça esse processo biológico que se decompõe e se transforma em um adubo natural",
    //thumbnail: "https://img.youtube.com/vi/VIDEO_ID_1/hqdefault.jpg",
    url: "#"
},
{
    id: 2,
    title: "Tipos de Compostagem",
    description: "Conheça os 4 tipos de compostagem e aprenda como produzí-la.",
    //thumbnail: "https://img.youtube.com/vi/VIDEO_ID_2/hqdefault.jpg",
    url: "#"
},
{
    id: 3,
    title: "Benefícios da Compostagem" ,     description: "Descobra os beneficios da compostagem para o meio ambiente",
    //thumbnail: "https://img.youtube.com/vi/VIDEO_ID_3/hqdefault.jpg",
    url: "#"
}
];

const channelUrl = "https://www.youtube.com/@SeuCanal";


function Composting() {
    return (
        <div className={styles.composting}>
            <div>
                <h1>Compostagem</h1>
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

            <div className={styles.btncomp}>
                <Link to="/GardenCare">
                    <button>Guia da Horta</button>
                </Link>
                <Link to="/Cooking">
                    <button>Alimentação e receitas</button>
                </Link>
            </div>

        </div>
    )
}

export default Composting;