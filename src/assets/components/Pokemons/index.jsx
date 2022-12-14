import { useState, useEffect } from 'react'
import axios from 'axios';

import styles from './styles.module.css';
import { Pokemon } from '../Pokemon';

export function Pokemons({ valorDoFiltro }) {

    const [pokemon, setPokemon] = useState([])
    
    useEffect(() => {
        const getPokemons = () => {
            const pokemonUrl = [];
            const maxLimits = 150;

            for(let i = 1; i <= maxLimits; i++) {
                pokemonUrl.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
            }

            const response = axios.all(pokemonUrl.map(pokemon => axios.get(pokemon))).then(res => {
                console.log(res) 
                return setPokemon(res)
            })

        }

        getPokemons()
    }, [])

    return(
        <>
            <div className={styles["pokemons-container"]}>
                {pokemon.length > 0 && (
                    pokemon.filter((pokemon) => {
                        const nameNormalized = pokemon.data.name.toLowerCase();
                        const valorDoFiltroNormalized = valorDoFiltro.toLowerCase();
                        return nameNormalized.includes(valorDoFiltroNormalized);
                    }).map((pokemon, key) => {
                        return(
                            <article className={styles["pokemons-article"]} key={key}>
                                <Pokemon 
                                    key={key}
                                    id={pokemon.data.id}
                                    name={pokemon.data.name}
                                    img={pokemon.data.sprites.other["official-artwork"].front_default}
                                    types={pokemon.data.types}
                                    stats={pokemon.data.stats}
                                    abilities={pokemon.data.abilities}
                                />
                            </article>
                        )
                    })
                )}
            </div>
        </>
    )
}