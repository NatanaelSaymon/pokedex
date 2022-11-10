import { useState, useEffect } from 'react'
import api from '../../../../services/api'

import styles from './styles.module.css';
import pokebola from '../../images/pokebola.png'

export function Pokemons() {

    const [pokemon, setPokemon] = useState([])
    
    useEffect(() => {
        const getPokemons = async () => {
            try {
                const response = await api.get('/pokemon?limit=150')
    
                function getPokemon(results) {
                    results.forEach(async pokemon => {
                        const response = await api.get(`/pokemon/${pokemon.name}`)
                        console.log(response.data)
                        setPokemon(currentList => [...currentList, response.data])
                    });
                }
    
                getPokemon(response.data.results)
    
            } catch(error) {
                console.log('ok, temos um erro: ', error)
            }
        }

        getPokemons()
    }, [])


    return(
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <img src={pokebola} alt="Imagem de uma Pokebola" />
                <h1>Pokédex</h1>
            </div>

            {pokemon.length > 0 && (
                pokemon.map((pokemon) => (
                    <article key={pokemon.id}>
                        <p>{pokemon.name}</p>
                    </article>
                ))
            )}
        </div>
    )
}