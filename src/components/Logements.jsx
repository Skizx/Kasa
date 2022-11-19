import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Card from "./Card"
import "../styles/components/cards.scss"

const Logements = () => {

    const [data, setData] = useState([])
    
    // Le useEffect se joue losque le composant est monté
    useEffect(() => {
        axios.get("/locationList.js")
        .then((res) => setData(res.data))
    }, [])

    return (
        <div>
            <div className='card-container'>
                {data.map((logement, id) => 
                 <div className='card_logement' key={id}>
                    <Link to={`/locationList/${logement.id}`}>
                        <Card cover={logement.cover} title={logement.title}/>
                    </Link>
                 </div>)}
            </div>
        </div>
    );
};

export default Logements;