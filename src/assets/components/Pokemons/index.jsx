import { useState, useEffect } from 'react'
import api from '../../../../services/api'
import axios from 'axios'

import styles from './styles.module.css';
import pokebola from '../../images/pokebola.png'

export function Pokemons() {

    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        const maxLimits = 151;
        let urlPokemon = []

        for(let i = 1; i < maxLimits; i++) {
            urlPokemon.push(`https://pokeapi.co/api/v2/pokemon/${i}`)
        }

        console.log(urlPokemon)

        const response = axios.all(
            urlPokemon.map((pokemon) => api.get(pokemon).then(data => setPokemon(data)))
        )


        // const loadPokemons = async () => {
        //     const response = await api.get('/pokemon')
        //     console.log(response.data.results)
        // }

        // loadPokemons()
    }, [])

    return(
        <div className={styles["container"]}>
            <div className={styles["header"]}>
                <img src={pokebola} alt="Imagen de uma Pokebola" />
                <h1>Pokédex</h1>
            </div>
        </div>
    )
}