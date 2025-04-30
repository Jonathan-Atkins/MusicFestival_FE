import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

export default function LoginPage() {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('userId', 1)
    localStorage.setItem('scheduleId', 1)
    navigate('/')
  }

  return (
    <div className="login-container">
      <h1>Welcome to Happy Feet 🎶</h1>
      <button className="login-button" onClick={handleLogin}>
        Log In as Guest
      </button>
    </div>
  )
}