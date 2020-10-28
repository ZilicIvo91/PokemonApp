import React from 'react'
import './SearchPokemon.scss';


export default function SearchPokemon({ searchPokemon, searchChange, searchSubmit }) {

    return (
        <div className="searchPokemon-container">
            <form onSubmit={searchSubmit}>
                <label className="searchPokemon-label">
                    <input 
                    onChange={searchChange}
                    value={searchPokemon}
                    placeholder="Enter Pokemon Name" />
                    <input
                        type="submit"
                        value="GO!" />
                </label>
            </form>
        </div>
    )
}
