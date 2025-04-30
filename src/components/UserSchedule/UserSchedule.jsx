import { useParams } from 'react-router-dom'
import { useEffect, useState } from 'react'

export default function UserSchedule() {
  const { userId, scheduleId } = useParams()
  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/users/${userId}/schedules/${scheduleId}/shows`)
      .then(res => res.json())
      .then(data => setShows(data.data || []))
      .catch(err => console.error('Error fetching user schedule:', err))
  }, [userId, scheduleId])

  return (
    <div style={{ padding: '2rem' }}>
      <h1 className="gradient-header">Your Schedule</h1>
      {shows.length === 0 ? (
        <p>You have no shows!</p>
      ) : (
        <ul className="show-list">
          {shows.map(show => (
            <li className="show-card" key={show.id}>
              <h2>{show.attributes.artist}</h2>
              <p>{show.attributes.location}</p>
              <p>{show.attributes.date}</p>
              <p>{show.attributes.time}</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
