import React from 'react'
import LogoFooter from '../assets/LogoFooter.png'
import '../styles/components/footer.scss'

const Footer = () => {
  return (
    <div className="footer-background">
      <img
        src={LogoFooter}
        alt="Logo Kasa blanc"
        className="footer-background_logo"
      />
      <h2 className="footer-background_title">
        © 2020 Kasa. All rights reserved
      </h2>
    </div>
  )
}

export default Footer
