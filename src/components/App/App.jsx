import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
import FestivalSchedule from '../FestivalSchedule/FestivalSchedule'
import LoginPage from '../Login/LoginPage'
import NavBar from '../NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/festivals/:id" element={<FestivalSchedule />} />
        <Route path="/login" element={<LoginPage />} />
      </Routes>
    </>
  )
}

export default App
