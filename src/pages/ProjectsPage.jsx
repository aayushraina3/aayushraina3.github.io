import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { FiArrowLeft } from "react-icons/fi"
import Projects from "../components/Projects"
import "./ProjectsPage.css"

const ProjectsPage = () => {
  const navigate = useNavigate()

  return (
    <motion.div
      className="projects-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="projects-page-header">
        <motion.button
          className="back-button"
          onClick={() => navigate("/")}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FiArrowLeft />
          Back to Home
        </motion.button>
        <motion.h1
          className="projects-page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          My Projects
        </motion.h1>
      </div>
      <Projects />
    </motion.div>
  )
}

export default ProjectsPage
