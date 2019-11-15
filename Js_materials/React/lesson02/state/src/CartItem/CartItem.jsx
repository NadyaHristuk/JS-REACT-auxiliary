import React from 'react';
import './CartItem.css';

const CartItem = ({el,deleteFromCart}) => {
    return (
        <li className = 'CartItem'>
        <span className='close__icon' data-name={el.title} onClick={deleteFromCart}>x</span>
        <h3 className = 'CartItem__title'>{el.title}</h3>
        <p className = 'CartItem__price'> Price {el.price} UAH</p>
        </li>
    );
};

export default CartItem;