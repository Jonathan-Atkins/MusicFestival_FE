import { useNavigate } from 'react-router-dom'
import './LoginPage.css'

export default function LoginPage() {
  const navigate = useNavigate()

  const handleLogin = () => {
    localStorage.setItem('user', JSON.stringify({
      id: 1,
      schedule_id: 1,
      username: 'johnnyb'
    }))
    navigate('/')
  }

  return (
    <div className="login-page">
      <div className="login-container">
        <h1 className="login-heading">Lets get those Feet Happy & Moving🎶</h1>
        <button className="login-button" onClick={handleLogin}>
          Log In as Guest
        </button>
      </div>
    </div>
  )
}
