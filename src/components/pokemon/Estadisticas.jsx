import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BarChart, Bar, CartesianGrid, XAxis, YAxis } from 'recharts';



function Estadisticas({ pokemon }) {
    // console.log(pokemon.stats[0].base_stat);

    const data = [
        { name: '1', data: pokemon.stats[0].base_stat },
        { name: '2', data: pokemon.stats[1].base_stat },
        { name: '3', data: pokemon.stats[2].base_stat },
        { name: '4', data: pokemon.stats[3].base_stat },
        { name: '5', data: pokemon.stats[4].base_stat },
        { name: '6', data: pokemon.stats[5].base_stat }
    ];
    return (
        <div>
            <BarChart width={190} height={100} data={data}>
                <Bar dataKey="data" fill="#7e3838" />
                <XAxis dataKey="name" />
            </BarChart>
            <div>
                <p>1. <span className="name">{pokemon.stats[0].stat.name}</span></p>
                <p>2. <span className="name">{pokemon.stats[1].stat.name}</span></p>
                <p>3. <span className="name">{pokemon.stats[2].stat.name}</span></p>
                <p>4. <span className="name">{pokemon.stats[3].stat.name}</span></p>
                <p>5. <span className="name">{pokemon.stats[4].stat.name}</span></p>
                <p>6. <span className="name">{pokemon.stats[5].stat.name}</span></p>

            </div>
        </div >
    )
}
export default Estadisticas;
