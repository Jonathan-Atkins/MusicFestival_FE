import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import './NavBar.css'

export default function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const { user } = useContext(UserContext)

  const isLoginPage = location.pathname === '/login'
  const isSignupPage = location.pathname === '/signup'
  const isUserSchedulePage = location.pathname.includes('/users/') && location.pathname.includes('/schedules/')

  const handleClick = () => {
    if (isUserSchedulePage) {
      navigate('/') // Show All Festivals
    } else if (user) {
      navigate(`/users/${user.id}/schedules/${user.schedule_id}`)
    } else {
      navigate('/login')
    }
  }

  return (
    <nav className="navbar">
      <NavLink to="/" className="navbar-title" data-cy="navbar-home">
        HAPPY FEET
      </NavLink>

      {isLoginPage && (
        <button className="navbar-home-button" onClick={() => navigate('/')}>
          🏠
        </button>
      )}

      {!isLoginPage && !isSignupPage && (
        <button className="navbar-login" onClick={handleClick}>
          {isUserSchedulePage ? 'Show All Festivals' : user ? 'See Your Schedule' : 'Login'}
        </button>
      )}
    </nav>
  )
}
