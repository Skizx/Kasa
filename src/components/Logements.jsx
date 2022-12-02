import React from 'react'
import { Link } from 'react-router-dom'
import Card from './Card'
import '../styles/components/cards.scss'
import allItems from '../datas/locationList'

const Logements = () => {


  return (
    <div className="wrapper">
      <div className="card-container">
        {allItems.map((logement, id) => (
          <div className="card_logement" key={id}>
            <Link to={`/FicheLogement/${logement.id}`}>
              <Card cover={logement.cover} title={logement.title} />
            </Link>
          </div>
        ))}
      </div>
    </div>
  )
}

export default Logements
