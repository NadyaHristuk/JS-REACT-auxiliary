import React from 'react';
import PropTypes from 'prop-types';
import './Header.css';
const Header = ({cart, toggleCart}) => {
    return (
        <header className='Header'>
             <button className="cart" onClick = {toggleCart}>Корзина</button>
             <p className="amount">{cart.length}</p>
        </header>
    );
};

Header.propTypes = {
    
};

export default Header;