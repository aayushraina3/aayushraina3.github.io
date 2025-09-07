import Navigation from "./components/Navigation"
import Hero from "./components/Hero"
import Skills from "./components/Skills"
import Projects from "./components/Projects"
import Footer from "./components/Footer"
import "./styles/globals.css"
import "./App.css"

function App() {
  return (
    <div className="App">
      <Navigation />
      <Hero />
      <Skills />
      <Projects />
      <Footer />
    </div>
  )
}

export default App
