import React from 'react';
import Fullstar from '../assets/Fullstar.png'
import Emptystar from '../assets/Emptystar.png'
import '../styles/components/rate.scss'

const Rate = ({starRating}) => {

    const ratingStar = [1,2,3,4,5];
    return (
        <div>
            {ratingStar.map((number) => 
            starRating >= number ? (
                // affichage conditionnel des ratingStar en fonction de la valeur de starRating
                // si la note des etoiles du logement et supérieure ou égale au nombre du tableau ratingStar
                // affiche le même nombre que la note en fullStar Sinon Affiche le reste en EmptyStar 
                <img key={number} className="stars" src={Fullstar} alt="full star" />
            ) : (
                <img key={number} className="stars" src={Emptystar} alt="empty star"/>
            )
            )}
        </div>
    );
};

export default Rate;