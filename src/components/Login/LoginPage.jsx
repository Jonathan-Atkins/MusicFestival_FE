import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import './LoginPage.css'

export default function LoginPage() {
  const navigate = useNavigate()
  const [email, setEmail] = useState('')

  const handleLogin = () => {
    // dummy login logic
    if (email) {
      localStorage.setItem('user', JSON.stringify({ email }))
      navigate('/')
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
        />
        <button className="login-button" onClick={handleLogin}>
          Log In
        </button>
        <Link to="/signup" className="signup-link">
          Sign Up
        </Link>
      </div>
    </div>
  )
}
