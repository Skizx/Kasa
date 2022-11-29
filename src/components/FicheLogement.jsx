/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carrousel from './Carrousel'
import '../styles/components/fichelogements.scss'
import { useParams } from 'react-router-dom'

const FicheLogement = () => {
  // récupération des paramètre passé dans le route path
  const params = useParams()
  const [logements, setLogements] = useState()

  useEffect(() => {
    const getData = async () => {
      // récupération des données du fichier locationList avec axion agissant comme fetch transformant les données en objets
      const res = await axios.get('/locationList.js')
      // utilisation de la méthode find() pour chaque élements se trouvant dans les paramètre de la route {id}
      // nous retournant les données du fichier locationList selon l'id
      const picked = res.data.find(({ id }) => id === params.id)
      // utilisation de la méthode map() permettant de crée un nouveau tableau avec les paramètre retourner,
      // envoyer à la fonction setLogements permettant de modifier la valeur de l'élement logement
      res.data.map(() => setLogements(picked))
    }
    getData()
  }, [])

  // déclaration des variables 
  const slidePics = logements && logements.pictures
  const tags = logements && logements.tags

  const equip =
    logements &&
    tags.map((item, index) => (
      <li key={index} className='taglist'>
        {item}
      </li>
    ))

  return (
    logements && (
      <div key={params.id} className='fiche-container'>
        <Carrousel slides={slidePics} />
        <div>
          <h1 className='fiche-container_title'>{logements.title}</h1>
          <h2 className='fiche-container_location'>{logements.location}</h2>
        </div>
        <div className='taglist-container'>
            <ul className='taglist-container_position'>
            {equip} 
            </ul>
        </div>
      </div>
    )
  )
}

export default FicheLogement
