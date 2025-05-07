import React, { useState } from 'react';
import styles from './Cooking.module.css';

function RecipeRegister() {
    const [titleRecipe, setTitleRecipe] = useState('');
    const [ingredients, setIngredients] = useState('');
    const [instructions, setInstructions] = useState('');
    const [type, setType] = useState('');

    const handleRecipeSubmit = async (e) => {
        e.preventdefault();
    
    }
    return (
        <section className={styles.cooking}>
            <h2>Cadastro de Receitas</h2>
            <form onSubmit={handleRecipeSubmit}>
                <div className={`${styles.inputForm} ${styles.recipe} ${styles.groupInput}`}>
                    <div className={styles.labelInput}>
                        <label>Título da receita:</label>
                        <input type="text" value={titleRecipe} onChange={(e) => setTitleRecipe(e.target.value)}/>
                    </div>
                </div>

                <div className={`${styles.inputForm} ${styles.recipe} ${styles.groupInput}`}>
                    <div className={styles.labelInput}>
                        <label>Categoria:</label>
                        <input type="text" value={type} onChange={(e) => setType(e.target.value)}/>
                    </div>
                </div> 

                <div className={`${styles.inputForm} ${styles.recipe} ${styles.groupTextarea}`}>
                    <div className={styles.labelInput}>
                        <label>Ingredientes:</label>
                        <textarea type="textarea" value={ingredients} onChange={(e) => setIngredients (e.target.value)} />
                    </div>
                </div>

                <div className={`${styles.inputForm} ${styles.recipe} ${styles.groupTextarea}`}>
                    <div className={styles.labelInput}>
                        <label>Modo de Preparo:</label>
                        <textarea type="textarea" value={instructions} onChange={(e) => setInstructions (e.target.value)} />
                    </div>
                </div>

                <button type='submit'>Salvar</button>
            </form>
        </section>
    )
}

export default RecipeRegister;