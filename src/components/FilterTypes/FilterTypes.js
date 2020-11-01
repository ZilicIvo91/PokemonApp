import React, { useState } from 'react';
import './FilterTypes.scss';


export default function FilterTypes({ typePokemonChange, typePokemonSearch }) {
    const [checkedPokemon, setCheckedPokemon] = useState("");
    const [isFilterOpen, setIsFilterOpen] = useState(false)
    const pokemonTypes = [
        'bug','dragon','fairy','fire','ghost','ground','normal','pyschic','steel','shadow','dark','electric','fighting','flying','grass','ice','poison','rock','unknown','water'
    ];
    const isOpen = (e) => {
        setIsFilterOpen(!isFilterOpen);
    }

    const typePokemonCheck = param => e => {
        setCheckedPokemon(param)
    };

   return (
        <div className="filterTypes-container">
            <p onClick={isOpen}>Filter pokemon-type:</p>
            <div className={ isFilterOpen ? "filterTypes-filter" : "filterTypes-filter-none" }>
                {pokemonTypes.map(type => (
                   <div key={type} onClick={typePokemonCheck(type)}>
                    <form>
                        <label>
                            <input type="radio" value={type} /> 
                            {type}</label>
                        </form>
                    </div>))}
               <button className="filterTypes-searchbtn" onClick={() => typePokemonSearch(checkedPokemon)}>Search Pokemon</button>
            </div>
        </div>
    )
}
