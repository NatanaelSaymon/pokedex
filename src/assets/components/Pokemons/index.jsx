import { useState, useEffect } from 'react'
import api from '../../../../services/api'
import axios from 'axios';

import styles from './styles.module.css';
import pokebola from '../../images/pokebola.png'

export function Pokemons() {

    const [pokemon, setPokemon] = useState([])
    
    useEffect(() => {
        const getPokemons = () => {
            const pokemonUrl = [];
            const maxLimits = 800;

            for(let i = 1; i <= maxLimits; i++) {
                pokemonUrl.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
            }

            const response = axios.all(pokemonUrl.map(pokemon => axios.get(pokemon))).then(res => {
                console.log(res) 
                return  setPokemon(res)
            })

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
                pokemon.map((pokemon, key) => (
                    <article key={key}>
                        <p>{pokemon.data.name}</p>
                        <img src={pokemon.data.sprites.other["official-artwork"].front_default} alt="" />
                    </article>
                ))
            )}
        </div>
    )
}