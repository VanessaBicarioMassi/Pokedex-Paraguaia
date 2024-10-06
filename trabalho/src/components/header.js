import React from 'react';
import { NavBar, NavItem } from '../styles/headerStyle';

class Header extends React.Component {
    render() {
        return (
            <NavBar>
                <h1>Pokémons</h1>
                <nav>
                    <NavItem href="/">Home</NavItem>
                </nav>
            </NavBar>
        );
    }
}

export default Header;
