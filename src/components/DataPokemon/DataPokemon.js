import React from 'react';
import './DataPokemon.scss';
import ListPokemon from './ListPokemon/ListPokemon';

export default function DataPokemon({ pokemonData, typePokemon }) {
  return (
    <div className="pokemonData-container">
      {pokemonData.map(pokemon => (
          <ListPokemon 
            key={pokemon.name} 
            pokemon={pokemon}
            typePokemon={typePokemon}/>
      ))}
    </div>
  )
}