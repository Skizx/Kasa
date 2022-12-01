import React, { useState } from 'react'
import Vectordown from '../assets/Vectordown.png'
import Vectorup from '../assets/Vectorup.png'
import '../styles/components/Collapse.scss'


function Collapse(props) { // récupération des propriétés Collapse venant du parent Collapse page About
  const [selected, setSelected] = useState() 

  const toggle = () => {  // création du toggle 
    if (selected === props.id ) { // Si la valeur de l'onglet selectionnés est égale a son id
      // alors nous retournons null au paramètre setelected permettant de fermer l'onglet
      return setSelected(null)
    }
    // Sinon nous retournons setSelected undefined nous permettant d'ouvrir l'onglet
    setSelected()
  }

  return (
    <div className="wrapper">
      <div className="collapse">
          <div className="item">
            <div className="title">
              <h2>{props.aboutTitle}</h2>
              <span onClick={() => toggle()}> 
                {selected === props.id ? ( // mise en place du toggle avec affichage conditionnel des flèches quand l'onglet en cours vaut l'id
                  <img src={Vectordown} alt="bas" />
                ) : (
                  <img src={Vectorup} alt="haut" />
                )}
              </span>
            </div>
            <div className={selected === props.id ? 'content show' : 'content'}/* affichage conditionnel du contenu quand l'onglet en cours vaut l'id */> 
              {props.aboutText}
            </div>
          </div>
      </div>
    </div>
  )
}

export default Collapse
