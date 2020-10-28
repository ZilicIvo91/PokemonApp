import React, { useState } from "react";
import './ListPokemon.scss';
import DetailsPokemon from "./DetailsPokemon/DetailsPokemon";

export default function ListPokemon({ pokemon,typePokemon }) {
const [isOpen, setIsOpen] = useState(false);
console.log(pokemon)
const clickPokemon = param => e => {
    console.log(param.name);
    setIsOpen(true)
};

  return (
    <div key={pokemon.name} className="listPokemon-container">
      <div className="listPokemon-mobile">
        <img src={pokemon.sprites.front_default} alt="" />
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
