import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'
import '../styles/components/navigation.scss'

function Navigation() {
  return (
    <header className="header-padding">
      <nav className="kasa-banner">
        <img src={logo} alt="Logo de Kasa" className="kasa-logo" />
        <nav className="nav-container">
          <Link to="/" className="nav-container-center">
            Accueil
          </Link>
          <Link to="/About" className="nav-container-center">
            A propos
          </Link>
        </nav>
      </nav>
    </header>
  )
}

export default Navigation
