import React from 'react';
import { Link } from 'react-router-dom';
import { findByLabelText } from '@testing-library/react';

const Nav = () => {
    return(
        <nav style={navStyle}>
            <Link to="/" style={linkStyle}>
                <h2 style={logoStyle}>Pokedex 1.0</h2>
            </Link>
            <Link to="/search" style={linkStyle}>
                <h3>Search</h3>
            </Link>
            <Link to="/my-team" style={linkStyle}>
                <h3>My Team</h3>
            </Link>
            <Link to="/about" style={linkStyle}> 
                <h3>About</h3>
            </Link>
        </nav>
    );
}

const navStyle = {
    display: "flex",
    flexDirection: 'row',
    justifyContent: 'space-around',
    backgroundColor: '#CC0000',
    color: 'black',
}

const logoStyle = {
    color: 'white',
    textShadow : '2px 2px black'
}

const linkStyle = {
    textDecoration: 'none',
    fontSize: "26px"
}

export default Nav;