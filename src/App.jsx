import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import HomePage from "./pages/HomePage"
import ProjectsPage from "./pages/ProjectsPage"
import ContactPage from "./pages/ContactPage"
import ResumePage from "./pages/ResumePage"
// import EasiPage from "./pages/EasiPage"
import "./styles/globals.css"
import "./App.css"

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/projects" element={<ProjectsPage />} />
          <Route path="/resume" element={<ResumePage />} />
          <Route path="/contact" element={<ContactPage />} />
          {/* <Route path="/easi" element={<EasiPage />} /> */}
        </Routes>
      </div>
    </Router>
  )
}

export default App
