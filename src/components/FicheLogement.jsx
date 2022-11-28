/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import Carrousel from './Carrousel';
import "../styles/components/fichelogements.scss"
import { useParams } from 'react-router-dom';


const FicheLogement = () => {

    const params = useParams()
    const [logements, setLogements] = useState();

    useEffect(() => {   
        const getData = async () => {
            const res = await axios.get("/locationList.js")
            const picked = res.data.find(({ id }) => id === params.id)
            res.data.map(() => setLogements(picked))
            
        }
        getData()
    }, []);
            
    const slidePics = logements && logements.pictures;
	const equipments = logements && logements.equipments;
	// eslint-disable-next-line no-unused-vars
	const equip =
		logements &&
		equipments.map((item, index) => (
			<li key={index} className="equipList">
				{item}
			</li>
		));

    return (
            logements && (
			<div key={params.id} className="fiche-container">
				<Carrousel slides={slidePics} />
                <div>
                    <h1>{logements.title}</h1>
                    <h2>{logements.location}</h2>
                </div>
            <h1>Slider</h1>
        </div>
            )
    )
};

export default FicheLogement;