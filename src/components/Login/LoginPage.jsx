import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './LoginPage.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleLogin = async () => {
    try {
      const res = await fetch(`http://localhost:3000/api/v1/users/find?email=${email}`)
      const data = await res.json()

      if (res.ok) {
        const user = {
          id: data.data.id,
          ...data.data.attributes
        }

        localStorage.setItem('user', JSON.stringify(user))

        navigate(`/users/${user.id}/schedules/${user.schedule_id}`)
      } else {
        alert('User not found. Please sign up.')
      }
    } catch (err) {
      console.error('Login error:', err)
      alert('Something went wrong.')
    }
  }

  return (
    <div className="login-page" data-cy="login-page">
      <div className="login-container" data-cy="login-container">
        <h1 className="login-heading" data-cy="login-heading">Happy Feet 🎶</h1>
        <input
          type="text"
          placeholder="Email"
          className="login-input"
          data-cy="login-input"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button
          className="login-button"
          data-cy="login-button"
          onClick={handleLogin}
        >
          Log In
        </button>
        <Link to="/signup" className="signup-link" data-cy="signup-link">
          Sign Up
        </Link>
      </div>
    </div>
  )
}
