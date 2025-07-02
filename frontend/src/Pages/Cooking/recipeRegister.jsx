import styles from './Cooking.module.css';
import { useForm } from 'react-hook-form'

function RecipeRegister() {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = async (data) => {
        console.log(data);
        reset();
    };

    return (
        <section className={styles.cooking}>
            <h2>Cadastro de Receitas</h2>
            <form onSubmit={handleSubmit(onSubmit)}> 
                <div className={`${styles.inputForm} ${styles.recipe} ${styles.groupInput}`}>
                    <div className={styles.labelInput}>
                        <label>Título da receita:</label>
                        <input type="text" {...register("titlerecipe")}/> 
                    </div>
                </div>

                <div className={`${styles.inputForm} ${styles.recipe} ${styles.groupInput}`}>
                    <div className={styles.labelInput}>
                        <label>Categoria:</label>
                        <input type="text" {...register("type")}/> 
                    </div>
                </div> 

                <div className={`${styles.inputForm} ${styles.recipe} ${styles.groupTextarea}`}>
                    <div className={styles.labelInput}>
                        <label>Ingredientes:</label>
                        <textarea {...register("ingredients")} />
                    </div>
                </div>

                <div className={`${styles.inputForm} ${styles.recipe} ${styles.groupTextarea}`}>
                    <div className={styles.labelInput}>
                        <label>Modo de Preparo:</label>
                            <textarea {...register("instructions")} /> 
                    </div>
                </div>

                <button type='submit'>Salvar</button>
            </form>
        </section>
    )
}

export default RecipeRegister;