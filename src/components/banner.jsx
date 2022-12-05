import React from 'react'
import banner from '../assets/banner.png'
import '../styles/components/banner.scss'

const Banner = () => {
  return (
    <div className="banner-container">
      <div className="banner-background">
        <img className='banner-background_img' src={banner} alt="Bannière Accueil" />
        <h1 className="banner-background-title">
          Chez vous, Partout et ailleurs
        </h1>
      </div>
    </div>
  )
}

export default Banner
