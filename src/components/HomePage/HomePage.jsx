import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

export default function HomePage() {
  const [festivals, setFestivals] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/festivals')
      .then(res => res.json())
      .then(data => setFestivals(data.data))
      .catch(err => console.error('Error fetching festivals:', err))
  }, [])
console.log("Festivals:", festivals)
  return (
    <div style={{ padding: '2rem' }}>
      <h1>Available Festivals</h1>
      <ul>
        {festivals.map(festival => (
          <li key={festival.id}>
            <NavLink to={`/festivals/${festival.id}`}>
              {festival.attributes.name} ({festival.attributes.attendee_count} attendees)
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
