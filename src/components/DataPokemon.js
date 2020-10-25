import React, { useState } from 'react';
import ListPokemon from './ListPokemon';

export default function DataPokemon({ pokemonData }) {
  return (
    <div>
      {pokemonData.map(pokemon => (
          <ListPokemon key={pokemon.name} pokemon={pokemon}/>
      ))}
    </div>
  )
}