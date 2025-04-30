import { useLocation } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="navbar">
      <span className="navbar-title">HAPPY FEET</span>
      {isHome && (
        <button className="navbar-login">Login</button>
      )}
    </nav>
  )
}
