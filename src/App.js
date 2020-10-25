import React, { useState, useEffect } from 'react';
import './App.scss';
import { getPokemon, getAllPokemon } from './services/pokemon';
// import Pagination from './components/Pagination';
import DataPokemon from './components/DataPokemon';



function App() {
  const initialUrl= "https://pokeapi.co/api/v2/pokemon";
  const [pokemonData, setPokemonData] = useState([])
  const [nextPageUrl, setNextPageUrl] = useState("")
  const [prevPageUrl, setPrevPageUrl] = useState("")
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    async function fetchData(){
      let response = await getAllPokemon(initialUrl)
      console.log(response.next)
      setNextPageUrl(response.next);
      setPrevPageUrl(response.previous);
      await loadPokemon(response.results);
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
  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextPageUrl)
    await loadPokemon(data.results);
    setNextPageUrl(data.next)
    console.log(nextPageUrl)
    setPrevPageUrl(data.previous);
    setLoading(false);
  }
  const prev = async () => {
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

  if (loading) return "Loading..."
  
  return (
    <>
      <DataPokemon pokemonData={pokemonData} />
      <div className="btn">
              <button onClick={prev}>Prev</button>
              <button onClick={next}>Next</button>
        </div>
      {/* <Pagination
        gotoNextPage={nextPageUrl ? gotoNextPage : null}
        gotoPrevPage={prevPageUrl ? gotoPrevPage : null}
      /> */}
    </>
  );
}

export default App;
