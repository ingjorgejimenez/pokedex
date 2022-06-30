import React, { Component } from 'react';
import { StyledComponent } from 'styled-components';
import logo from './favicon.ico';

class Navbar extends Component {
    render() {
        return (
            <div className="navbar navbar-expand-lg navbar-dark bg-dark nd-nav">
                <img width={50} src={logo} />
                <span className='mx-4'>Pokédex</span>
            </div>
        );
    }
}

export default Navbar;
