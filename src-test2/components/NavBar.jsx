import React, { Component } from 'react';

// Stateless Functional Component
const NavBar = ({totalCounters}) /* Filtrando qual propriedade é dedejável */ => {

    return (
        <nav className='navbar navbar-light bg-light'>

            <a className='navbar-brand' href="#">
                Navbar
                <span className='badge rounded-pill bg-secondary m-2'>
                    {totalCounters}
                </span>
            </a>
        </nav>
    )
}

export default NavBar;