import React, { Component } from 'react';
import logo from './favicon.ico';
import link from './linkedin.png';
import git from './git.png';
import what from './whasapp.png';

import 'bootstrap/dist/css/bootstrap.min.css';

class Footer extends Component {

    render() {
        return (
            <div className='bg-dark' >
                <div className="container-xxl bg-dark ">
                    <div className='row footer py-5'>

                        <div className="col-md-4  my-auto">
                            <img width={50} src={logo} />
                            <span className='mx-4'>Pokédex</span>
                        </div>
                        <div className="col-md-4 my-auto">

                            <a className='mx-2' href={`https://www.linkedin.com/in/ing-jorge-jimenez/`}><img width={30} src={link} /></a>
                            <a className='mx-2' href={`https://github.com/ingjorgejimenez`}><img width={30} src={git} /></a>
                            <a className='mx-2' href={`https://wa.me/+573183296814`}><img width={30} src={what} /></a>
                        </div>
                        <div className="col-md-4 my-auto">
                            <p>
                                © 2022 Pokédex |Jorge Jimenez.
                            </p>

                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Footer;