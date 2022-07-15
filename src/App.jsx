import { Link, Route, Routes } from "react-router-dom"
import Navbar from "./components/Navbar"
import Crew from "./pages/Crew"
import Destination from "./pages/Destination"
import Home from "./pages/Home"
import Technology from "./pages/Technology"

function App() {

  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/destination" element={<Destination />} />
        <Route path="/crew" element={<Crew />} />
        <Route path="/technology" element={<Technology />} />
      </Routes>
    </>
  )
}

export default App

