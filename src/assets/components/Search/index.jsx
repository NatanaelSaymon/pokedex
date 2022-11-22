import styles from './styles.module.css';

import lupa from '../../images/svg/lupa.svg';

export function Search() {
    return(

        <section className={styles['search__container']}>
            <div className={styles['search__description']}>
                <h2>
                    Busque por um pokemon
                </h2>
            </div>
            <div className={styles['search__input']}>
                <input 
                    type="text" 
                    name="" 
                    id="" 
                    placeholder="Pesquisar Pokémon"
                />
                
                <button className={styles['search__btn']} type="button">
                    <img src={lupa} alt="Imagem de uma lupa" />
                </button>
            </div>
        </section>
        
    )
}