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
                            type={type.type.name} /> ))}
                </div>
                <div className="detailsPokemon-detail-container">
                    <div className="detailsPokemon-detail">
                        <p>Weight:</p>
                        <p>{(pokemon.weight)/10} kg</p>
                    </div>
                    <div className="detailsPokemon-detail">
                        <p>Height:</p>
                        <p>{(pokemon.height)/10} m</p>
                    </div>
                    <div className="detailsPokemon-detail">
                        <p>Ability:</p>
                       {pokemon.abilities.map((ability) => (
                           <p className="abilities" key={ability.ability.name}>{ability.ability.name}</p>
                       ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
