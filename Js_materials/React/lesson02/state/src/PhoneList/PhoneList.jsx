import React from 'react';
import PropTypes from 'prop-types';
import './PhoneList.css';
import PhoneListItem from '../PhoneListItem/PhoneListItem';
const PhoneList = ({phones, addToCart}) => {
    return (
        <div className='container'>
            {phones.map(el => <PhoneListItem phone = {el} key = {el.title} addToCart={addToCart}/>)}
        </div>
    );
};

PhoneList.propTypes = {
    
};

export default PhoneList;