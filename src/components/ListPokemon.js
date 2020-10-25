import React, { useState } from "react";
import DetailsPokemon from "./DetailsPokemon";
// import Modal from 'react-modal';

// Modal.setAppElement('#root');

export default function ListPokemon({ pokemon }) {
const [isOpen, setIsOpen] = useState(false);

const clickPokemon = param => e => {
    console.log(param.name);
    setIsOpen(true)
};

  return (
    <div key={pokemon.name} >
      <h4 onClick={clickPokemon(pokemon)}>{pokemon.name}</h4>
      <DetailsPokemon pokemon={pokemon} isOpen={isOpen} close={() => setIsOpen(false)} />
    </div>
  );
}
