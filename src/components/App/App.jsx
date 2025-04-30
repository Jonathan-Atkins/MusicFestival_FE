// App.jsx
import { Routes, Route } from 'react-router-dom'
import HomePage from '../HomePage/HomePage.jsx'
// import FestivalSchedule from '../FestivalSchedule/FestivalSchedule.jsx'

function App() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/festivals/:id" element={<FestivalSchedule />} /> */}
    </Routes>
  )
}

export default App
