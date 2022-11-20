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

    const [selected, setSelected] = useState(null)

    const toggle = (i) => {
        if (selected === i) {
            return setSelected(null)
            
        }
        setSelected(i)
    }

  return (
    <div className='wrapper'>
        <div className='collapse'>
            {AboutData.map((item, i) => (
                <div className='item' key={i}>
                    <div className='title' onClick={() => toggle(i)}>
                        <h2>{item.aboutTitle}</h2>
                        <span>{selected === i ? <img src={Vectorup} alt="" /> : <img src={Vectordown} alt="" />}</span>
                    </div>
                    <div className={selected === i ? 'content' : 'content show'}>{item.aboutText}</div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Collapse
