import { useState, useContext } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { UserContext } from '../../context/UserContext'
import './LoginPage.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const { login } = useContext(UserContext) // updated here
  const [email, setEmail] = useState('')

  const handleLogin = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/v1/users/find?email=${email}`)
      const data = await res.json()

      if (res.ok) {
        const userData = {
          id: data.data.id,
          ...data.data.attributes
        }
        login(userData) // updated here
        navigate(`/users/${userData.id}/schedules/${userData.schedule_id}`)
      } else {
        alert('User not found. Please sign up.')
      }
    } catch (err) {
      console.error('Login error:', err)
      alert('Something went wrong.')
    }
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-heading">Happy Feet 🎶</h1>
        <input
          type="text"
          placeholder="Email"
          className="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          data-cy="login-email"
        />
        <button className="login-button" onClick={handleLogin} data-cy="login-submit">
          Log In
        </button>
        <Link to="/signup" className="signup-link" data-cy="signup-link">
          Sign Up
        </Link>
      </div>
    </div>
  )
}
