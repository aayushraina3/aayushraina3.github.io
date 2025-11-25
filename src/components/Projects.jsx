import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  FiExternalLink,
  FiGithub,
  FiCode,
  FiTarget,
  FiFileText,
} from "react-icons/fi"
import "./Projects.css"

const Projects = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: "StayOnTrack",
      description:
        "MSc Dissertation: AI-powered multi-agent productivity web app with Next.js frontend, NestJS backend, Ollama for local AI inference and Firebase Firestore for real-time tracking.",
      techStack: [
        "Next.js",
        "NestJS",
        "Ollama",
        "Firebase",
        "TypeScript",
        "AI/ML",
      ],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      // liveDemo: "https://stayontrack-demo.vercel.app",
      github: "https://github.com/aayushraina3/stayontrack",
      icon: FiTarget,
      color: "var(--sage-green)",
    },
    {
      id: 2,
      title: "ATSReady",
      description:
        "Next.js 15 application to check ATS compatibility in CVs and provide feedback, integrating Google Gemini AI API with client-side file processing and deployment to Vercel.",
      techStack: [
        "Next.js 15",
        "Google Gemini AI",
        "JavaScript",
        "Vercel",
        "File Processing",
      ],
      image:
        "https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=600&h=400&fit=crop&crop=center",
      liveDemo: "https://ats-checker-rust.vercel.app/",
      github: "https://github.com/aayushraina3/ats-checker",
      icon: FiFileText,
      color: "var(--terracotta)",
    },
  ]

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.2,
      },
    },
  }

  const projectVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="projects" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          className="projects-grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              variants={projectVariants}
              whileHover={{ y: -10 }}
              style={{ "--project-color": project.color }}
            >
              <div className="project-image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image"
                />
                <div className="project-overlay">
                  <div className="project-icon-wrapper">
                    <project.icon className="project-icon" />
                  </div>
                  <div className="project-links">
                    {project.title !== "StayOnTrack" && (
                      <motion.a
                        href={project.liveDemo}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="project-link"
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <FiExternalLink />
                        <span>Live Demo</span>
                      </motion.a>
                    )}
                    <motion.a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <FiGithub />
                      <span>Source Code</span>
                    </motion.a>
                  </div>
                </div>
              </div>

              <div className="project-content">
                <div className="project-header">
                  <h3 className="project-title heading-tertiary">
                    {project.title}
                  </h3>
                  <div className="project-number">
                    {String(index + 1).padStart(2, "0")}
                  </div>
                </div>

                <p className="project-description text-body">
                  {project.description}
                </p>

                <div className="project-tech">
                  <div className="tech-label">Tech Stack:</div>
                  <div className="tech-list">
                    {project.techStack.map((tech, techIndex) => (
                      <motion.span
                        key={tech}
                        className="tech-tag"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={inView ? { opacity: 1, scale: 1 } : {}}
                        transition={{
                          delay: 0.5 + index * 0.1 + techIndex * 0.05,
                          duration: 0.3,
                        }}
                        whileHover={{ scale: 1.05 }}
                      >
                        {tech}
                      </motion.span>
                    ))}
                  </div>
                </div>

                <div className="project-actions">
                  {project.title !== "StayOnTrack" && (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary project-btn"
                    >
                      <FiExternalLink />
                      View Project
                    </a>
                  )}
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-secondary project-btn"
                  >
                    <FiGithub />
                    Code
                  </a>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="project-decoration">
                <motion.div
                  className="decoration-circle"
                  animate={{
                    scale: [1, 1.2, 1],
                    rotate: [0, 180, 360],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "linear",
                  }}
                />
                <motion.div
                  className="decoration-line"
                  animate={{
                    scaleX: [0, 1, 0],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: index * 0.5,
                  }}
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Background decorative elements */}
        <div className="projects-background">
          <motion.div
            className="bg-shape shape-1"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="bg-shape shape-2"
            animate={{
              rotate: [360, 0],
              y: [0, -20, 0],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Projects
