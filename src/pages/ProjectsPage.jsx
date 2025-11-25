import { motion } from "framer-motion"
import { FiArrowLeft } from "react-icons/fi"
import Projects from "../components/Projects"
import "./ProjectsPage.css"
import Navigation from "../components/Navigation"

const ProjectsPage = () => {
  return (
    <div className="projects-page">
      <Navigation />
      <motion.div
        className="projects-page-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        {/* Header */}
        <motion.div
          className="projects-page-header "
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <h2 className="projects-title">Recent works</h2>
          <p className="projects-subtitle">Projects I've recently worked on.</p>
        </motion.div>
        <Projects />
      </motion.div>
    </div>
  )
}

export default ProjectsPage
