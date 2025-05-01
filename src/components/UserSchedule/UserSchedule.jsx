import { useEffect, useState, useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import './UserSchedule.css'

export default function UserSchedule() {
  const { user } = useContext(UserContext)
  const [shows, setShows] = useState([])

  const fetchSchedule = () => {
    if (!user || !user.id || !user.schedule_id) return

    fetch(`http://localhost:3000/api/v1/users/${user.id}/schedules/${user.schedule_id}/shows`)
      .then(res => res.json())
      .then(data => setShows(data.data))
      .catch(err => console.error('Error fetching schedule:', err))
  }

  useEffect(() => {
    fetchSchedule()
  }, [user])

  const handleRemoveShow = async (showId) => {
    if (!user || !user.id || !user.schedule_id) return

    try {
      const res = await fetch(`http://localhost:3000/api/v1/users/${user.id}/schedules/${user.schedule_id}/shows/${showId}`, {
        method: 'DELETE'
      })

      if (res.ok) {
        alert('Show removed from your schedule!')
        fetchSchedule() // 🔁 Refresh the full schedule list
      } else {
        alert('Something went wrong while removing the show.')
      }
    } catch (err) {
      console.error('Error removing show:', err)
      alert('An error occurred. Try again.')
    }
  }

  return (
    <div className="schedule-page">
      <h1 className="gradient-header" data-cy="schedule-header">Your Schedule</h1>
      {shows.length === 0 ? (
        <p className="no-shows-msg">You have no shows!</p>
      ) : (
        <ul className="show-list" data-cy="show-list">
          {shows.map(show => (
            <li className="show-card" key={show.id} data-cy="show-card">
              <button
                className="remove-button"
                onClick={() => handleRemoveShow(show.id)}
                title="Remove from Schedule"
              >
                −
              </button>
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
