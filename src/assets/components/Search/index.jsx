import { useState } from 'react';
import styles from './styles.module.css';

import lupa from '../../images/svg/lupa.svg';

export function Search({ valorDoFiltro, setValorDoFiltro }) {

    const valorDaBusca = valorDoFiltro;
    const setValorDaBusca = setValorDoFiltro;

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
                    value={valorDaBusca}
                    onChange={((e) => { setValorDaBusca(e.target.value) })}
                />
                
                <button className={styles['search__btn']} type="button">
                    <img src={lupa} alt="Imagem de uma lupa" />
                </button>
            </div>
        </section>
        
    )
}