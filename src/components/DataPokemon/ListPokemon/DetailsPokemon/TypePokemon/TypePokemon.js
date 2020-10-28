import React,{ useEffect, useState } from 'react';
import './TypePokemon.scss';
// import { getPokemon, getAllPokemon } from '../../services/pokemon';

export default function TypePokemon({ type }) {
    const clickType = param => e => {
        console.log(param)
    };
    
    return (
        <div className="typePokemon-container">
            <p onClick={clickType(type)}>{type}</p>
        </div>
    )
}
