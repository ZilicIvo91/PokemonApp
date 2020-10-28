import React from 'react';
import './DetailsPokemon.scss';
import TypePokemon from './TypePokemon/TypePokemon'
import ImagePokemon from './ImagePokemon/ImagePokemon'

export default function DetailsPokemon({ pokemon, isOpen, close, typePokemon }) { 
   
    if (!isOpen) return null
    return (
        <div className="detailsPokemon-container">
            <button className="btn-close" onClick={close}>X</button>

            <div className="detailsPokemon-details">

                <ImagePokemon pokemon={pokemon} />

                <div className="detailPokemon-type">
                    {pokemon.types.map(type => (
                <TypePokemon 
                        key={type.type.name} 
                        type={type.type.name}
                        typePokemon={typePokemon} /> ))}
                </div>
                <div className="detailsPokemon-detail-container">
                    <div className="detailsPokemon-detail">
                        <p>Weight:</p>
                        <p>{pokemon.weight}</p>
                    </div>
                    <div className="detailsPokemon-detail">
                        <p>Height:</p>
                        <p>{pokemon.height}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
