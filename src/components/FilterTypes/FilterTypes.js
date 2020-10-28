import React, { useState } from 'react';
import './FilterTypes.scss';


export default function FilterTypes({ typePokemonChange, typePokemonSearch }) {
    const [checkedPokemon, setCheckedPokemon] = useState("")
    const pokemonTypes = [
        'bug',
        'dragon',
        'fairy',
        'fire',
        'ghost',
        'ground',
        'normal',
        'pyschic',
        'steel',
        'shadow',
        'dark',
        'electric',
        'fighting',
        'flying',
        'grass',
        'ice',
        'poison',
        'rock',
        'unknown',
        'water'
    ];
   
    const typePokemonCheck = param => e => {
        setCheckedPokemon(param)
    };

   return (
        <div className="filterTypes-container">
            <p>Filter pokemon-type:</p>
            <div className="filterTypes-filter">
                {pokemonTypes.map(type => (
                    <div className="filterTypes-filter" key={type} onChange={typePokemonChange} onClick={typePokemonCheck(type)}>
                        <input type="checkbox" /> 
                        <label>{type}</label>
                    </div>
                ))}
                <button className="filterTypes-searchbtn" onClick={() => typePokemonSearch(checkedPokemon)}>Search Pokemon</button>
            </div>
        </div>
    )
}
