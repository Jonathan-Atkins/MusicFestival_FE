import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage'
// import FestivalSchedule from '../FestivalSchedule/FestivalSchedule'
import NavBar from '../NavBar/NavBar'

function App() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        {/* <Route path="/festivals/:id" element={<FestivalSchedule />} /> */}
      </Routes>
    </>
  )
}

export default App
