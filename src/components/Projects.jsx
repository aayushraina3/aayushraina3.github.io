import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  FiExternalLink,
  FiGithub,
  FiCode,
  FiShoppingCart,
  FiMessageSquare,
  FiTrendingUp,
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
      title: "E-Commerce Platform",
      description:
        "A full-stack e-commerce solution with modern UI, secure payments, and admin dashboard. Features include product management, order tracking, and real-time inventory updates.",
      techStack: ["React", "Node.js", "MongoDB", "Stripe", "Tailwind CSS"],
      image:
        "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop&crop=center",
      liveDemo: "https://demo-ecommerce.netlify.app",
      github: "https://github.com/yourusername/ecommerce-platform",
      icon: FiShoppingCart,
      color: "var(--sage-green)",
    },
    {
      id: 2,
      title: "Social Media Dashboard",
      description:
        "Analytics dashboard for social media management with real-time data visualization, content scheduling, and engagement tracking across multiple platforms.",
      techStack: ["Next.js", "TypeScript", "PostgreSQL", "Chart.js", "Redux"],
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop&crop=center",
      liveDemo: "https://social-dashboard-demo.vercel.app",
      github: "https://github.com/yourusername/social-dashboard",
      icon: FiTrendingUp,
      color: "var(--terracotta)",
    },
    {
      id: 3,
      title: "Real-time Chat Application",
      description:
        "Modern chat application with real-time messaging, file sharing, group chats, and emoji reactions. Built with WebSocket for instant communication.",
      techStack: ["React", "Socket.io", "Express", "MongoDB", "Cloudinary"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      liveDemo: "https://realtime-chat-demo.herokuapp.com",
      github: "https://github.com/yourusername/chat-app",
      icon: FiMessageSquare,
      color: "var(--dusty-rose)",
    },
    {
      id: 4,
      title: "Task Management System",
      description:
        "Collaborative project management tool with drag-and-drop functionality, team collaboration features, time tracking, and progress visualization.",
      techStack: ["Vue.js", "Python", "Django", "PostgreSQL", "Docker"],
      image:
        "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop&crop=center",
      liveDemo: "https://task-manager-demo.netlify.app",
      github: "https://github.com/yourusername/task-manager",
      icon: FiCode,
      color: "var(--accent-primary)",
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
    <section className="projects section" id="projects" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="heading-secondary text-center">
            Featured <span className="text-accent">Projects</span>
          </h2>
          <p className="text-body text-center section-subtitle">
            A showcase of my recent work and creative solutions
          </p>
        </motion.div>

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
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-primary project-btn"
                  >
                    <FiExternalLink />
                    View Project
                  </a>
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
