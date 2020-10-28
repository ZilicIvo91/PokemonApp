import React from 'react';
import './AllPokemonButton.scss';


export default function AllPokemonButton({ allPokemonButton }) {
    return (
        <div className="allPokemonButton">
            <button onClick={allPokemonButton}>Get all pokemon</button>
        </div>
    )
}
