import React, { useState, useEffect } from 'react';
import { getAllPokemon, getPokemon } from './services/pokemon';
import $ from 'jquery';
import axios from "axios";
import Navbar from "./components/layout/Navbar";
import 'bootstrap/dist/css/bootstrap.min.css';
// import Sections from "./components/layout/Sections";
import Sections from "./components/pokemon/PokemonCarta";
import Popup from "./components/Popup";
import './App.css';
import Footer from "./components/layout/Footer"
import logo from './components/layout/favicon.ico';


function App() {
  const [pokemonData, setPokemonData] = useState([]);
  const [nextUrl, setNextUrl] = useState('');
  const [previousUrl, setPreviousUrl] = useState('');
  const [loading, setLoading] = useState(true);
  const [state, setState] = useState(false);
  const [pokemo, setPokemon] = useState("pikachu");
  const initialUrl = 'https://pokeapi.co/api/v2/pokemon';

  useEffect(() => {
    const toArray = [];
    async function fetchData() {
      let response = await getAllPokemon(initialUrl);
      console.log(response);
      setNextUrl(response.next);
      setPreviousUrl(response.previous);
      let pokemon = await loadingPokemon(response.results);
      console.log(pokemon);
      setLoading(false);
    }
    fetchData();
  }, []);
  const handleChange = (e) => {
    setPokemon(e.target.value.toLowerCase());
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    // getPokemon();  

  };
  const next = async () => {
    setLoading(true);
    let data = await getAllPokemon(nextUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  }

  const prev = async () => {
    if (!previousUrl) return;
    setLoading(true);
    let data = await getAllPokemon(previousUrl);
    await loadingPokemon(data.results);
    setNextUrl(data.next);
    setPreviousUrl(data.previous);
    setLoading(false);
  }

  const loadingPokemon = async (data) => {
    let _pokemonData = await Promise.all(
      data.map(async pokemon => {
        let pokemonRecord = await getPokemon(pokemon.url);
        return pokemonRecord;
      })
    );

    setPokemonData(_pokemonData);
  };
  // console.log(pokemonData);


  return (
    <>
      {loading ? <h1>Loading...</h1> : (
        <>

          <Navbar />
          <div className="btn">
            <button className='btn btn-primary mx-2' onClick={prev}>Prev</button>
            <button className='btn btn-warning mx-2' onClick={next}>Next</button>
          </div>
          <div className="container">
            <div className='row' >
              {
                pokemonData.map((pokemon, i) => {

                  return <Sections key={i} pokemon={pokemon} />

                })
              }
            </div>
          </div>
          <div className="btn">
            <button className='btn btn-primary mx-2' onClick={prev}>Prev</button>
            <button className='btn btn-warning mx-2' onClick={next}>Next</button>
          </div>
          <Footer />

        </>
      )}
    </>
  );

}

export default App;