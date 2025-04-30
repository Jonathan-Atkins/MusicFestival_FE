// src/components/UserSchedule/UserSchedule.jsx
import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import './UserSchedule.css'

export default function UserSchedule() {
  const { id, scheduleId } = useParams()
  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${id}/schedules/${scheduleId}/shows`)
      .then(res => res.ok ? res.json() : Promise.reject(res))
      .then(data => setShows(data.data || []))
      .catch(err => {
        console.error('Error fetching user schedule:', err)
        setShows([])
      })
  }, [id, scheduleId])

  return (
    <div className="user-schedule-page">
      <h1 className="gradient-header" data-cy="schedule-header">Your Schedule</h1>
      {shows.length === 0 ? (
        <p className="empty-message" data-cy="empty-message">You have no shows!</p>
      ) : (
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
      )}
    </div>
  )
}
