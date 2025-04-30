import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))
  const isHome = location.pathname === '/'
  const isLogin = location.pathname === '/login'
  const isUserSchedule = location.pathname.includes('/users/') && location.pathname.includes('/schedules/')

  const handleClick = () => {
    if (user) {
      navigate(`/users/${user.id}/schedules/${user.schedule_id}`)
    } else {
      navigate('/login')
    }
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-title">
        HAPPY FEET
      </NavLink>

      {isLogin && (
        <NavLink to="/" className="navbar-home-button">
          🏠 
        </NavLink>
      )}

      {isHome && (
        <button className="navbar-login" onClick={handleClick}>
          {user ? 'See Your Schedule' : 'Login'}
        </button>
      )}

      {isUserSchedule && (
        <NavLink to="/" className="navbar-home-button">
          🏠
        </NavLink>
      )}
    </nav>
  )
}
