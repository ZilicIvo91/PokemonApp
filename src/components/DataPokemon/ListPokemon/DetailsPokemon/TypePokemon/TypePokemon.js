import React from 'react';
import './TypePokemon.scss';
import typeColors from '../../../../../helpers/typeColors';

export default function TypePokemon({ type }) {
    return (
        <div className="typePokemon-container"
        style={{ backgroundColor: typeColors[type]}}>
            <p>{type}</p>
        </div>
    )
}
