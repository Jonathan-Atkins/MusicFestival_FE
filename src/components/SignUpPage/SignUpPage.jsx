import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './SignupPage.css'

export default function SignupPage() {
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    username: '',
    birthday: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    try {
      const response = await fetch('http://localhost:3000/api/v1/users', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ user: formData })
      })

      const data = await response.json()

      if (response.ok) {
        const user = {
          id: data.data.id,
          ...data.data.attributes
        }

        localStorage.setItem('user', JSON.stringify(user))
        navigate(`/users/${user.id}/schedules/${user.schedule_id}`)
      } else {
        alert(data.errors?.join(', ') || 'Signup failed.')
      }
    } catch (error) {
      console.error('Signup error:', error)
      alert('Something went wrong. Please try again.')
    }
  }

  return (
    <div className="signup-page">
      <div className="signup-container">
        <h1 className="signup-heading">Create an Account</h1>
        <form onSubmit={handleSubmit} className="signup-form">
          <input type="text" name="first_name" placeholder="First Name" value={formData.first_name} onChange={handleChange} required />
          <input type="text" name="last_name" placeholder="Last Name" value={formData.last_name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleChange} required />
          <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleChange} required />
          <input type="date" name="birthday" placeholder="Birthday" value={formData.birthday} onChange={handleChange} required />
          <button type="submit" className="signup-button">Sign Up</button>
        </form>
      </div>
    </div>
  )
}
