import React, { useState } from 'react';
import styles from './Cooking.module.css';

function Articles() {
    const [titleArticle, setTitleArticle] = useState('');
    const [subtitle, setSubtitle] = useState('');
    const [text, setText] = useState('');

    const handleArticleSubmit = async (e) => {
        e.preventdefault();
    
    }
    return (
        <section className={styles.cooking}>
            <h2>Artigos</h2>
            <form onSubmit={handleArticleSubmit}>
                <div className={`${styles.inputForm} ${styles.art} ${styles.groupInput}`}>
                    <div className={styles.labelInput}>
                        <label>Título do artigo:</label>
                        <input type="text" value={titleArticle} onChange={(e) => setTitleArticle(e.target.value)}/>
                    </div>
                </div>

                <div className={`${styles.inputForm} ${styles.art} ${styles.groupInput}`}>
                    <div className={styles.labelInput}>
                        <label>Subtítulo:</label>
                        <input type="text" value={subtitle} onChange={(e) => setSubtitle(e.target.value)}/>
                    </div>
                </div> 

                <div className={`${styles.inputForm} ${styles.art} ${styles.textArt}`}>
                    <div className={styles.labelInput}>
                        <label>Texto:</label>
                        <textarea type="textarea" value={text} onChange={(e) => setText(e.target.value)} />
                    </div>
                </div>

                <button type='submit'>Salvar</button>
            </form>
        </section>
    )
}

export default Articles;