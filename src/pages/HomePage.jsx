import Navigation from "../components/Navigation"
import Hero from "../components/Hero"
import Skills from "../components/Skills"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="home-page">
      <Navigation />
      <Hero />
      <Skills />
      <Footer />
    </div>
  )
}

export default HomePage
