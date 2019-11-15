import React from 'react';
import PropTypes from 'prop-types';
import './PhoneListItem.css';

const PhoneListItem = ({phone, addToCart}) => {
    return (
        <div className="card">
        <img src={phone.img} alt="" className="card__img"/>
        <p className="card__rewiew">Отзывы {phone.reviews}</p>
        <p className="card__title">{phone.title}</p>
        <div className="buy">
            <p className="price">{phone.price} UAH</p>
            <img src="https://cdn.pixabay.com/photo/2014/04/02/10/53/shopping-cart-304843_1280.png" alt="cart" data-name = {phone.title}
            onClick={addToCart}/>
        </div>
    </div>
    );
};

PhoneListItem.propTypes = {
    
};

export default PhoneListItem;