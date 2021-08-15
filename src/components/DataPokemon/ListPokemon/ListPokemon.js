import React, { useState } from "react";
import './ListPokemon.scss';
import DetailsPokemon from "./DetailsPokemon/DetailsPokemon";

export default function ListPokemon({ pokemon,typePokemon }) {
const [isOpen, setIsOpen] = useState(false);

const clickPokemon = param => e => {
    setIsOpen(true)
};

  return (
    <div key={pokemon.name} className="listPokemon-container">
      <div className="listPokemon-mobile">
        <img src={pokemon.sprites.front_default} alt="" onClick={clickPokemon(pokemon)} />
        <h3 onClick={clickPokemon(pokemon)}>{pokemon.name}</h3>
        
      <DetailsPokemon 
        pokemon={pokemon} 
        isOpen={isOpen} 
        close={() => setIsOpen(false)} 
        typePokemon={typePokemon} />
      </div>
    </div>
  );
}
