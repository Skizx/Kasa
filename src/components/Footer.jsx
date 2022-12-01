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
      <p className="footer-background_title">
        © 2020 Kasa. All rights reserved
      </p>
    </div>
  )
}

export default Footer
