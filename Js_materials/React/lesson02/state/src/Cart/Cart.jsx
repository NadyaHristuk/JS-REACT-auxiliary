import React from 'react';
import PropTypes from 'prop-types';
import './Cart.css';
import CartItem from '../CartItem/CartItem';

const Cart = ({toggleCart, cart, deleteFromCart}) => {
    return (
        <div className = 'Cart__hide Cart'>
        <span className = 'close' onClick = {toggleCart}>x</span>
           <ul>
               {cart.map(el => <CartItem el = {el} key={el.title} deleteFromCart={deleteFromCart}/>)}
           </ul>
           <p className= 'total'>Total: {cart.reduce((acc, el)=> acc + el.price, 0)} UAH</p>
        </div>
    );
};

Cart.propTypes = {
    
};

export default Cart;