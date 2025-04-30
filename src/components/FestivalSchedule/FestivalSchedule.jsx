import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './FestivalSchedule.css'

export default function FestivalSchedule() {
  const { id } = useParams()
  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/festivals/${id}/shows`)
      .then(res => res.json())
      .then(data => setShows(data.data))
      .catch(err => console.error('Error fetching shows:', err))
  }, [id])

  return (
    <div className="schedule-page">
      <h1 className="gradient-header" data-cy="schedule-header">Festival Schedule</h1>
      <ul className="show-list" data-cy="show-list">
        {shows.map(show => (
          <li className="show-card" key={show.id} data-cy="show-card">
            <h2 data-cy="show-artist">{show.attributes.artist}</h2>
            <p data-cy="show-location">{show.attributes.location}</p>
            <p data-cy="show-date">{show.attributes.date}</p>
            <p data-cy="show-time">{show.attributes.time}</p>
          </li>
        ))}
      </ul>
    </div>
  )
}
