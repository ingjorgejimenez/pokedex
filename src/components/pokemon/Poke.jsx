import React, { Component } from 'react';

class poke extends Component {
    state = {
        name: '',
        imageUrl: '',
        pokemonIndex: '',
        imageLoading: true,
        toManyRequests: false
    };
    componentDidMount() {
        const { name, url, } = this.props;

        const pokemonIndex = url.split('/')[url.split('/').length - 2];
        //const imageUrl = `./sprites/pokemon/${pokemonIndex}.png`;
        const imageUrl = `https://github.com/PokeAPI/sprites/blob/master/sprites/pokemon/${pokemonIndex}.png?raw=true`;

        this.setState({ name, imageUrl, pokemonIndex });
    }
    render() {
        return (
            <div>

            </div>
        );
    }
}

export default poke;