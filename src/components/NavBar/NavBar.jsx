import { useLocation, NavLink } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  const location = useLocation()
  const isHome = location.pathname === '/'

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-title">
        HAPPY FEET
      </NavLink>
      {isHome && (
        <button className="navbar-login">Login</button>
      )}
    </nav>
  )
}
