import axios from 'axios';
import React, { useEffect } from 'react';
import "../styles/components/cards.scss"

const Cards = () => {

    useEffect(() => {
        axios.get("/locationList.js").then((res) => console.log(res.data))
    }, [])

    return (
        <div>
            <h1>Cards</h1>
        </div>
    );
};

export default Cards;