import React from 'react'
import { NavLink } from 'react-router-dom'

import styled from 'styled-components';

const Header = () => {
    return ( 
        <ContenedorHeader>
            <Titulo>Random Dex-Blog</Titulo>
            <Menu>
                <NavLink to="/">Random Pokemon</NavLink>
                <NavLink to="/tipos-pokemones">Tipos Pokemones</NavLink>
                <NavLink to="/random-pokemon">Random Pokemon</NavLink>
            </Menu>
        </ContenedorHeader>
     );
}

const ContenedorHeader = styled.header`
    text-align: center;
    margin-bottom: 40px;
`

const Titulo = styled.h1`
    margin-botton: 10px;
    font-size: 26px;
    text-transform: uppercase;
`

const Menu = styled.nav`
    a {
        text-decoration: none;
        color: #165168;
        margin: 0 18px;
    }

    a:hover {
        color: #19168;
    }

    a.active {
        border-bottom: 2px solid #165168;
        paddind-bottom: 3px;
    }
`
 
export default Header;