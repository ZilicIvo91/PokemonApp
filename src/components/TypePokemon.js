import React from 'react'

export default function TypePokemon({ type }) {
    const clickType = param => e => {
        console.log(param);
      // search po tipu
    };    return (
        <div>
            <p onClick={clickType(type)}>Types:{type}</p>
        </div>
    )
}
