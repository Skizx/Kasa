import React, { useState } from 'react'
import Vectordown from '../assets/Vectordown.png'
import Vectorup from '../assets/Vectorup.png'
import '../styles/components/Collapse.scss'

const AboutData = [
  {
    aboutTitle: 'Fiabilité',
    aboutText:
      'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées par nos équipes.',
  },
  {
    aboutTitle: 'Respect',
    aboutText:
      'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.',
  },
  {
    aboutTitle: 'Service',
    aboutText:
      "Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N'hésitez pas à nous contacter si vous avez la moindre question.",
  },
  {
    aboutTitle: 'Sécurité',
    aboutText:
      "La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.",
  },
]

function Collapse() {
  const [selected, setSelected] = useState(0) // je défini l'index du premier onglet à 0

  const toggle = (i) => { 
    if (selected === i) {
      return setSelected(null)
    }
    setSelected(i)
  }

  return (
    <div className="wrapper">
      <div className="collapse">
        {AboutData.map((item, i) => (
          <div className="item" key={i}>
            <div className="title">
              <h2>{item.aboutTitle}</h2>
              <span onClick={() => toggle(i)}> 
                {selected === i ? ( // mise en place du toggle avec affichage conditionnel des flèches quand l'onglet en cours vaut l'index
                  <img src={Vectordown} alt="bas" />
                ) : (
                  <img src={Vectorup} alt="haut" />
                )}
              </span>
            </div>
            <div className={selected === i ? 'content show' : 'content'}/* affichage conditionnel du contenu quand l'onglet en cours vaut l'index */> 
              {item.aboutText}
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Collapse
