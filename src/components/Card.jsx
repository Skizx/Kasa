/* eslint-disable jsx-a11y/img-redundant-alt */
import React from 'react';
import "../styles/components/cards.scss"

const Card = ({ cover, title}) => {
    return (
        <article className='card-location'>
            <img src={cover} alt="Photo location" />
            <div className='card-location_layer'>
                <p className='card-location_title'>{title}</p>
            </div>

        </article>
    );
};

export default Card;