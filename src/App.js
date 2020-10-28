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
  const [typePokemon, setTypePokemon] = useState("");

  useEffect(() => {
    async function fetchData(){
      let response = await getAllPokemon(initialUrl)
      console.log(response)
      setNextPageUrl(response.next);
      setPrevPageUrl(response.previous);
      await loadPokemon(response.results);
      console.log(response.results)
      setLoading(false);
    }
    fetchData();
  }, [])

  const loadPokemon = async (data) => {
    let _pokemonData = await Promise.all(data.map(async pokemon => {
      let pokemonRecord = await getPokemon(pokemon)
      return pokemonRecord
    }))
    setPokemonData(_pokemonData);
  }

  const goToNextPage = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextPageUrl)
    await loadPokemon(data.results);
    setNextPageUrl(data.next)
    console.log(nextPageUrl)
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

  const typeGetPokemon = async () => {
    const typeUrl = `https://pokeapi.co/api/v2/type/${typePokemon}`
    const response = await getAllPokemon(typeUrl);
    await loadPokemon(response.results);
    // let array = [];
    // array.push(data)
    // setPokemonData(array);
  }
  
  
  const searchChange = (e) => {
    setSearchPokemon(e.target.value.toLowerCase());
  }
  
  const searchSubmit = (e) => {
    e.preventDefault();
    searchGetPokemon();
  }

  const searchGetPokemon = async () => {
    const searchUrl = `https://pokeapi.co/api/v2/pokemon/${searchPokemon}`
    const data = await getAllPokemon(searchUrl);
    console.log(data)
    let array = [];
    array.push(data)
    setPokemonData(array);
  }
  
  const allPokemonButton = async () => {
    setLoading(true);
    let response = await getAllPokemon(initialUrl)
    let count = response.count;
    console.log(count);
    const allPokemonUrl = `https://pokeapi.co/api/v2/pokemon?offset=0&limit=${count}`;
    let data = await getAllPokemon(allPokemonUrl);
    await loadPokemon(data.results);
    console.log(data.results);
    setLoading(false);
  }

  const typePokemonChange = (param) => e => {
    setTypePokemon(param);
  }

  const typePokemonSearch = (checked) => {
    setTypePokemon(checked);
    typeGetPokemon()
  }
  if (loading) return <img src={Loader} style={{ marginTop: '20%', marginLeft: '30%'}} />
  
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
            typePokemon={typePokemon}
            typePokemonChange={typePokemonChange} 
            typePokemonSearch={typePokemonSearch} />
  

          
          <DataPokemon 
            pokemonData={pokemonData}
            typePokemon={typePokemon} />
        
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
