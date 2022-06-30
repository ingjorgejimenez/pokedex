import pokemonTypeColors from '../../helpers/pokemonTypeColors';
import React from 'react';
import $ from 'jquery';
import './style.css';
import ReactDOM from 'react-dom'
import Estadistica from "./Estadisticas"

function PokemonCarta({ pokemon, onClick }) {
    let i = 0;
    // console.log(onClick);
    function handleClick() {
        i++;
        if (i < 2) {
            $(".Card__info", this).css("display", "block");
        } else {
            $(".Card__info", this).css("display", "none");
            i = 0;
        }
    }
    return (

        <div className='col-lg-3 col-md-4 col-sm-6-12' onClick={handleClick} >
            <div className="card Card my-3 carta" style={{ backgroundColor: pokemonTypeColors[pokemon.types[0].type.name] }} >
                <div className="Card_num">
                    <p>N° {pokemon.id}</p>
                </div>
                <div className="Card__img">
                    <div className='nd-font'></div>
                    <img src={pokemon.sprites.front_default} alt="" />
                </div>
                <div className="Card__name">
                    {pokemon.name}
                </div>
                <div className="Card__types">
                    {
                        pokemon.types.map(type => {
                            return (
                                <div className="Card__type" style={{ backgroundColor: pokemonTypeColors[type.type.name] }}>
                                    {type.type.name}
                                </div>
                            )
                        })
                    }
                </div>
                <div className="Card__info">
                    <div className="Card__data">
                        <p className="title">Peso</p>
                        <p>{parseFloat(pokemon.weight * 0.1).toFixed(1)}Kg</p>
                    </div>
                    <div className="Card__data">
                        <p className="title">Altura</p>
                        <p>{parseFloat(pokemon.height * 0.1).toFixed(1)}m</p>
                    </div>
                    <div className="Card__data">
                        <p className="title">Habilidades</p>
                        {
                            pokemon.abilities.map(abilities => {
                                return (
                                    <p className="ability">{abilities.ability.name}</p>
                                )
                            })
                        }
                        <p className="ability">{pokemon.abilities[0].ability.name}</p>
                    </div>
                    <div className="Card__data">
                        <span className="title">Estadistica</span>
                        <div className='nd-estadistica'>
                            <Estadistica pokemon={pokemon} />
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}

export default PokemonCarta;