import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import { useNavigate } from "react-router-dom"
import {
  FiExternalLink,
  FiGithub,
  FiCode,
  FiTarget,
  FiFileText,
  FiHeart,
} from "react-icons/fi"
import "./Projects.css"

const Projects = () => {
  const navigate = useNavigate()
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
    // {
    //   id: 3,
    //   title: "Easi",
    //   description:
    //     "A Stress Management Ecosystem for Students and Professionals. User research-driven UX design project integrating WHOOP API for real-time stress tracking with personalized recommendations.",
    //   techStack: ["Figma", "React", "WHOOP API", "User Research", "UX Design"],
    //   image:
    //     "https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=400&fit=crop&crop=center",
    //   caseStudy: "/easi",
    //   icon: FiHeart,
    //   color: "var(--dusty-rose)",
    // },
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
          className="projects-list"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card-horizontal"
              variants={projectVariants}
              whileHover={{ scale: 1.02 }}
              style={{ "--project-color": project.color }}
            >
              <div className="project-image-wrapper">
                <img
                  src={project.image}
                  alt={project.title}
                  className="project-image-horizontal"
                />
                <div className="project-overlay-icon">
                  <project.icon className="project-icon" />
                </div>
              </div>

              <div className="project-content-horizontal">
                <div className="project-header-horizontal">
                  <div>
                    <h3 className="project-title heading-tertiary">
                      {project.title}
                    </h3>
                    <div className="project-number-inline">
                      {String(index + 1).padStart(2, "0")}
                    </div>
                  </div>
                </div>

                <p className="project-description text-body">
                  {project.description}
                </p>

                <div className="project-tech">
                  <div className="tech-list-horizontal">
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

                <div className="project-actions-horizontal">
                  {project.caseStudy ? (
                    <button
                      onClick={() => navigate(project.caseStudy)}
                      className="btn btn-primary project-btn"
                    >
                      <FiFileText />
                      View Case Study
                    </button>
                  ) : project.title !== "StayOnTrack" && project.liveDemo ? (
                    <a
                      href={project.liveDemo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-primary project-btn"
                    >
                      <FiExternalLink />
                      View Project
                    </a>
                  ) : null}
                  {project.github && (
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-secondary project-btn"
                    >
                      <FiGithub />
                      Code
                    </a>
                  )}
                </div>
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
