import React from 'react';
import TypePokemon from './TypePokemon'

export default function DetailsPokemon({ pokemon, isOpen, close }) { 
    
   
    if (!isOpen) return null
    return (
        <div>
            <button onClick={close}>Close</button>
            <img src={pokemon.sprites.front_default} alt="" />
            <p>Weight: {pokemon.weight}</p>
             <p>Height: {pokemon.height}</p>
             <p>{pokemon.abilities[0].ability.name}</p>
                {pokemon.types.map(type => (
                    <TypePokemon key={type.type.name} type={type.type.name}/>
                )
            )}
        </div>
    )
}
