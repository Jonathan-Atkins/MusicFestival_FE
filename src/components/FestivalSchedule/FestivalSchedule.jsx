import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useContext } from 'react'
import { UserContext } from '../../context/UserContext'
import './FestivalSchedule.css'

export default function FestivalSchedule() {
  const { id } = useParams()
  const { user } = useContext(UserContext)
  const [shows, setShows] = useState([])

  useEffect(() => {
    fetch(`http://localhost:3000/api/v1/festivals/${id}/shows`)
      .then(res => res.json())
      .then(data => setShows(data.data))
      .catch(err => console.error('Error fetching shows:', err))
  }, [id])

  const handleAddShow = async (showId) => {
    if (!user) {
      alert("Please log in to add shows to your schedule.")
      return
    }
  
    try {
      const response = await fetch(`http://localhost:3000/api/v1/users/${user.id}/schedules/${user.schedule_id}/shows`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ show_id: showId })
      })
  
      const data = await response.json()
  
      if (response.ok) {
        alert("Show added to your schedule!")
      } else if (response.status === 422) {
        alert("You already added this show to your schedule.")
      } else {
        alert("Something went wrong. Try again.")
      }
    } catch (err) {
      console.error('Add show error:', err)
      alert("An error occurred while trying to add the show.")
    }
  }

  return (
    <div className="schedule-page">
      <h1 className="gradient-header" data-cy="schedule-header">Festival Schedule</h1>
      <ul className="show-list" data-cy="show-list">
        {shows.map(show => (
          <li className="show-card" key={show.id} data-cy="show-card">
          <button
            className="add-button"
            onClick={() => handleAddShow(show.id)}
            title="Add to Schedule"
          >
            +
          </button>
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
