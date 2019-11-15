import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <header>
            <ul className="menu">
                <li className="menu__item">
                <NavLink className="menu__link" to='/'>Roadster</NavLink>
                </li>
                <li className="menu__item">
                <NavLink className="menu__link" to='/modelS'>Model S</NavLink>
                </li>
                <li className="menu__item">
                <NavLink className="menu__link" to='/modelX'>Model X</NavLink>
                </li>
                <li className="menu__item">
                <NavLink className="menu__link" to='/user'>User</NavLink>
                </li>
            </ul>
        </header>
    );
};

export default Header;