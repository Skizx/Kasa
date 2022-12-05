import React from 'react'
import { useState } from 'react'
import '../styles/components/carrousel.scss'
import left from '../assets/Vectorleft.png'
import right from '../assets/Vectorright.png'

const Carrousel = ({ slides }) => {
  const [current, setCurrent] = useState(0) //je définie l'index du premier slide à 0
  const length = slides.length // longueur du tableau de slides

  const nextSlide = () => {
    setCurrent(current === length - 1 ? 0 : current + 1) // on repart au premier slide quand on arrive au dernier
  }
  const prevSlide = () => {
    setCurrent(current === 0 ? length - 1 : current - 1) // on repart au dernier slide quand on est au premier
  }

  return (
    <section id="carrousel-container">
      {length > 1 && ( //Affichage des flèches seulement si length > 1
        <img
          src={left}
          alt="gauche"
          onClick={prevSlide}
          className="leftVector"
        />
      )}
      {length > 1 && (
        <img
          src={right}
          alt="droite"
          onClick={nextSlide}
          className="rightVector"
        />
      )}
      {slides.map((slide, index) => (
        <div
          key={index} // mise en place du slider avec affichage conditionnel quand le slide en cours vaut l'index
        >
          {index === current && ( // Affichage conditionnel de l'image en fonction de la valeur de l'index en cours
            <img
              className="carrousel-container_img"
              src={slide}
              alt="appartement à louer"
            />
          )}
            <span className="slider_number">
              {current + 1}/{length}
            </span>
        </div>
      ))}
    </section>
  )
}
export default Carrousel
