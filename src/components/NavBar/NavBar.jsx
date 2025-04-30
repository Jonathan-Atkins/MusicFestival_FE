import { NavLink, useLocation, useNavigate } from 'react-router-dom'
import './NavBar.css'

export default function NavBar() {
  const location = useLocation()
  const navigate = useNavigate()
  const user = JSON.parse(localStorage.getItem('user'))

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
      <button className="navbar-login" onClick={handleClick}>
        {user ? 'See Your Schedule' : 'Login'}
      </button>
    </nav>
  )
}
