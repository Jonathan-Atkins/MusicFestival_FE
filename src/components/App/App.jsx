import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import FestivalSchedule from '../FestivalSchedule/FestivalSchedule'
import LoginPage from '../Login/LoginPage'
import SignUpPage from '../SignUpPage/SignUpPage'
import NavBar from '../NavBar/NavBar'
import UserSchedule from '../UserSchedule/UserSchedule'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/festivals/:id" element={<FestivalSchedule />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/users/:userId/schedules/:scheduleId" element={<UserSchedule />} />
      </Routes>
    </>
  )
}

export default App
