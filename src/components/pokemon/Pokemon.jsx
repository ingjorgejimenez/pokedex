import React, { Component } from 'react'
import PokemonCarta from "./PokemonCarta";
import axios from 'axios';

export default class Pokemon extends Component {

    state = {
        url: 'https://pokeapi.co/api/v2/pokemon/?offset=0&limit=40',
        link: `https://pokeapi.co/api/v2/pokemon/`,
        pokemon: null,
        pokemonData: []

    };


    async componentDidMount() {
        const toArray = [];
        const resultado = await axios.get(this.state.link);
        toArray.push(resultado.data);
        console.log(toArray);
        // setPokemonData(toArray);

        const res = await axios.get(this.state.url);
        this.setState({ pokemon: res.data['results'] });
        // this.setState({ pokemonData: toArray });
        console.log(res.data['results']);

    }

    render() {
        return (
            <div className='row'>
                {this.state.pokemon ? (
                    <div className="row">
                        {this.state.pokemon.map(pokemon => (
                            <PokemonCarta
                                key={pokemon.name}
                                name={pokemon.name}
                                url={pokemon.url}

                            />
                        ))}
                    </div>
                ) : (
                    <h1>loading</h1>
                )}
            </div>

        )
    }
}
