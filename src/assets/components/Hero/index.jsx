import { useState, useEffect } from "react";
import api from '../../../../services/api';


export function Hero() {
    const [pokemon, setPokemon] = useState([])

    useEffect(() => {
        async function loadPokemon() {
            const name = 'zekrom';

            const response = await api.get(`/pokemon/${name}`)
            setPokemon(response)
        }

        loadPokemon()
    }, [])
    return(
        <div>Zekrom</div>
    )
}