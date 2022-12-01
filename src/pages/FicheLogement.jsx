/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useState } from 'react'
import Carrousel from '../components/Carrousel'
import Collapse from '../components/Collapse'
import Rate from '../components/Rate'
import '../styles/components/fichelogements.scss'
import { useParams } from 'react-router-dom'
import allItems  from '../datas/locationList'

const FicheLogement = () => {
  // récupération des paramètre passé dans le route path
  const { id } = useParams();
  const [logement, setLogement] = useState();
  // redirection vers le path entrer en argument



  useEffect(() => {
    // utilisation de la méthode find() pour chaque élements se trouvant dans les paramètre de la route {id}
    // nous retournant les données du fichier locationList si l'id retouner est égale à l'id de la route
      const oneItems = allItems.find((element) => element.id === id)
      setLogement(oneItems)
    }, [])
    
    // Gestion de l'erreur sur l'id indiquant que si l'ID trouver dans onelogement est undefined 
    // Nous renvoie à la page d'erreur grâce au hook useNavigate()
    if (!logement) {
      return ("/Error")
    }
  // création d'un tableau contenant les tags du logements, les renvoyants sous forme de liste à puces
  const tags =
    logement.tags.map((item, index) => (
      <li key={index} className="taglist">
        {item}
      </li>
    ))

    const equipements = 
    logement.equipments.map((equip, index) => (
      <li key={index} className='equipementlist'>
        {equip}
      </li>
    ))


  return (
    <>
      <div key={id} className="fiche-container">
        <Carrousel slides={logement.pictures} />
        <div
          className="fiche-container_global" /* Affichage du titre ainsi que de la localisation */
        >
          <h1 className="fiche-container_title">{logement.title}</h1>
          <h2 className="fiche-container_location">{logement.location}</h2>
        </div>
        <div
          className="taglist-container fiche-container_global" /* Affichage de la liste de tags props */
        >
          <ul className="taglist-container_position">{tags}</ul>
        </div>
        <div className="rating-host-container"/* Affichage des etoiles correspondant à la note du logements props */>
          <div className="fiche-container_global"><Rate starRating={logement.rating}/></div>
          <div className="user-container" /* Affichage du prenom/nom de l'hôte ainsi que sa photo de profil */>
            <div className="user-container_name">{logement.host.name}</div>
            <img
              src={logement.host.picture}
              alt="User profil"
              className="user-picture"
            />
          </div>
        </div>
        <div>
          <Collapse 
          aboutTitle= ' Description '
          aboutText={logement.description} />
          <Collapse 
          aboutTitle= ' Equipements '
          aboutText={equipements} />
        </div>
      </div>
      </>
    )
}

export default FicheLogement