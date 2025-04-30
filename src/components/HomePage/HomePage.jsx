import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import './HomePage.css'

export default function HomePage() {
  const [festivals, setFestivals] = useState([])

  useEffect(() => {
    fetch('http://localhost:3000/api/v1/festivals')
      .then(res => res.json())
      .then(data => setFestivals(data.data))
      .catch(err => console.error('Error fetching festivals:', err))
  }, [])

  return (
    <div style={{ padding: '2rem' }}>
      <h1 className="gradient-header">Available Festivals</h1>
      <ul className="festival-list">
        {festivals.map(festival => (
          <li className="festival-card" key={festival.id}>
            <h2>{festival.attributes.name}</h2>
            <p className="artist-list">
            Featuring: {festival.attributes.artists.slice(0, 3).join(', ')}
            </p>
            <p>{festival.attributes.attendee_count} attendees</p>
            <NavLink to={`/festivals/${festival.id}`}>
              <button className="festival-cta pulse">Explore Lineup</button>
            </NavLink>
          </li>
        ))}
      </ul>
    </div>
  )
}
