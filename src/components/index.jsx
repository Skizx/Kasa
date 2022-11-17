import { Link } from 'react-router-dom'
import logo from '../assets/logo.png'

function Header() {
  return (
    <header>
      <img src={logo} alt='Logo de Kasa' />
    <nav>
      <Link to="/">Accueil</Link>
      <Link to="/About">A propos</Link>
    </nav>
    </header>
  )
}

export default Header