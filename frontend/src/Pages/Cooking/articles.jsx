import styles from './Cooking.module.css';
import { useForm } from 'react-hook-form';

function Articles() {
    const { register, handleSubmit, reset } = useForm ();
    
    const onSubmit = async (data) => {
        console.log(data);
        reset();
    };

    return (
        <section className={styles.cooking}>
            <h2>Artigos</h2>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div className={`${styles.inputForm} ${styles.art} ${styles.groupInput}`}>
                    <div className={styles.labelInput}>
                        <label>Título do artigo:</label>
                        <input type="text" {...register("titleArticle")}/>
                    </div>
                </div>

                <div className={`${styles.inputForm} ${styles.art} ${styles.groupInput}`}>
                    <div className={styles.labelInput}>
                        <label>Subtítulo:</label>
                        <input type="text" {...register("subtitle")}/> 
                        </div>
                </div> 

                <div className={`${styles.inputForm} ${styles.art} ${styles.textArt}`}>
                    <div className={styles.labelInput}>
                        <label>Texto:</label>
                        <textarea  {...register("text")} /> 
                    </div>
                </div>

                <button type='submit'>Salvar</button>
            </form>
        </section>
    )

}
export default Articles;