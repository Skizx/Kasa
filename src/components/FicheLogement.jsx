/* eslint-disable react-hooks/exhaustive-deps */
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import Carrousel from './Carrousel'
import Collapse from './Collapse'
import Rate from './Rate'
import '../styles/components/fichelogements.scss'
import { useParams, useNavigate } from 'react-router-dom'

const FicheLogement = () => {
  // récupération des paramètre passé dans le route path
  const params = useParams()
  // redirection vers le path entrer en argument
  const navigate = useNavigate()
  const [logements, setLogements] = useState()

  useEffect(() => {
    const getData = async () => {
      // récupération des données du fichier locationList avec axios agissant comme fetch transformant les données en objets
      // simulant un appel API
      const res = await axios.get('/locationList.js')
      // utilisation de la méthode find() pour chaque élements se trouvant dans les paramètre de la route {id}
      // nous retournant les données du fichier locationList si l'id retouner est égale à l'id de la route
      const onelogement = res.data.find(({ id }) => id === params.id)
      // utilisation de la méthode map() permettant de crée un nouveau tableau avec les paramètre retourner,
      // envoyer à la fonction setLogements permettant de modifier la valeur de l'élement logement
      res.data.map(() => setLogements(onelogement))
      // Gestion de l'erreur sur l'id indiquant que si l'ID trouver dans onelogement est undefined 
      // Nous renvoie à la page d'erreur grâce au hook useNavigate()
      if (onelogement === undefined) {
        return navigate("/Error")
      }
    }
    getData()
  }, [])

  // déclaration des variables représentant les composants objets récupérer dans logements
  const slidePics = logements && logements.pictures
  const tag = logements && logements.tags
  const equipement = logements && logements.equipments;
  // création d'un tableau contenant les tags du logements, les renvoyants sous forme de liste à puces
  const tags =
    logements &&
    tag.map((item, index) => (
      <li key={index} className="taglist">
        {item}
      </li>
    ))

    const equipements = 
    logements &&
    equipement.map((equip, index) => (
      <li key={index} className='equipementlist'>
        {equip}
      </li>
    ))


  return (
    logements && (
      // Affichage Carrousel props
      <div key={params.id} className="fiche-container">
        <Carrousel slides={slidePics} />
        <div
          className="fiche-container_global" /* Affichage du titre ainsi que de la localisation */
        >
          <h1 className="fiche-container_title">{logements.title}</h1>
          <h2 className="fiche-container_location">{logements.location}</h2>
        </div>
        <div
          className="taglist-container fiche-container_global" /* Affichage de la liste de tags props */
        >
          <ul className="taglist-container_position">{tags}</ul>
        </div>
        <div className="rating-host-container"/* Affichage des etoiles correspondant à la note du logements props */>
          <div className="fiche-container_global"><Rate starRating={logements.rating}/></div>
          <div className="user-container" /* Affichage du prenom/nom de l'hôte ainsi que sa photo de profil */>
            <div className="user-container_name">{logements.host.name}</div>
            <img
              src={logements.host.picture}
              alt="User profil"
              className="user-picture"
            />
          </div>
        </div>
        <div>
          <Collapse 
          aboutTitle= ' Description '
          aboutText={logements.description} />
          <Collapse 
          aboutTitle= ' Equipements '
          aboutText={equipements} />
        </div>
      </div>
    )
  )
}

export default FicheLogement
