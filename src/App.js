import React, { useState, useEffect } from 'react';
import './App.scss';
import { getPokemon, getAllPokemon } from './services/pokemon';
import Pagination from './components/Pagination/Pagination';
import DataPokemon from './components/DataPokemon/DataPokemon';
import Navbar from './components/Navbar/Navbar';
import SearchPokemon from './components/SearchPokemon/SearchPokemon';
import AllPokemonButton from './components/AllPokemonButton/AllPokemonButton';
import FilterTypes from './components/FilterTypes/FilterTypes';
import Loader from './images/Loader.gif';

function App() {
  const initialUrl= "https://pokeapi.co/api/v2/pokemon";
  const [pokemonData, setPokemonData] = useState([]);
  const [nextPageUrl, setNextPageUrl] = useState("");
  const [prevPageUrl, setPrevPageUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [searchPokemon, setSearchPokemon] = useState("");
  
  useEffect(() => {
    async function fetchData(){
      let response = await getAllPokemon(initialUrl)
      setNextPageUrl(response.next);
      setPrevPageUrl(response.previous);
      await loadPokemon(response.results);
      setLoading(false);
    }
    fetchData();
  }, [])

  const loadPokemon = async (data) => {
    let dataPokemon = await Promise.all(data.map(async pokemon => {
      let pokemons = await getPokemon(pokemon)
      return pokemons
    }))
    setPokemonData(dataPokemon);
  }

  const goToNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextPageUrl)
    await loadPokemon(data.results);
    setNextPageUrl(data.next)
    setPrevPageUrl(data.previous);
    setLoading(false);
  }

  const goToPrevPage = async () => {
    if (!prevPageUrl){
      return
    }
    setLoading(true);
    let data = await getAllPokemon(prevPageUrl)
    await loadPokemon(data.results);
    setNextPageUrl(data.next)
    setPrevPageUrl(data.previous);
    setLoading(false);
  }

  const searchChange = (e) => {
    setSearchPokemon(e.target.value.toLowerCase());
  }
  
  const searchSubmit = (e) => {
    e.preventDefault();
    searchGetPokemon();
    setSearchPokemon("")
  }
  
  const searchGetPokemon = async () => {
    setLoading(true);
    const searchUrl = `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
    const data = await getAllPokemon(searchUrl);
    let array = [];
    array.push(data)
    setPokemonData(array);
    setLoading(false);
  }
  const allPokemonButton = async () => {
    setLoading(true);
    let response = await getAllPokemon(initialUrl)
    let count = response.count;
    const allPokemonUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${count}`;
    let data = await getAllPokemon(allPokemonUrl);
    await loadPokemon(data.results);
    setLoading(false);
  }

  const typePokemonSearch = (checked) => {
    typeGetPokemon(checked)
  }

   const typeGetPokemon = async (typePokemon) => {
    setLoading(true);
    let typeUrl = `https://pokeapi.co/api/v2/type/${typePokemon}/`
    const response = await getAllPokemon(typeUrl);

    const filterPokemon = async (data) => {
      let dataPokemon = await Promise.all(data.map(async pokemon => {
      let pokemons = await getPokemon(pokemon.pokemon)
      return pokemons
    }))
    setPokemonData(dataPokemon);
  }
    await filterPokemon(response.pokemon);
    setLoading(false);
   }

  if (loading) return <img src={Loader} alt="loader" style={{ 
    marginTop: '20%', marginLeft: '40%'
  }} />
  
  return (
    <div className="app-container">
      <header>
        <Navbar />
      </header>
        <SearchPokemon 
          searchPokemon={searchPokemon} 
          searchChange={searchChange} 
          searchSubmit={searchSubmit} />

        <AllPokemonButton 
            allPokemonButton={allPokemonButton} />

      <div className="app-main">
          <FilterTypes 
            typePokemonSearch={typePokemonSearch} />

          <DataPokemon 
            pokemonData={pokemonData} />      
      </div>

      <footer>
        <Pagination 
            goToPrevPage={prevPageUrl ?  goToPrevPage  : null}
            goToNextPage={nextPageUrl ? goToNextPage : null} />
      </footer>
    </div>
  );
}

export default App;
