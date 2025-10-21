import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi"
import avatarImage from "../assets/Self.png"
import "./Hero.css"

const Hero = () => {
  // Simple loading greetings
  const loadingGreetings = [
    { text: "Hello", language: "English" },
    { text: "नमस्ते", language: "Hindi" },
  ]

  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [showMainContent, setShowMainContent] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    // Switch greeting once after 1 second
    const greetingTimer = setTimeout(() => {
      setCurrentGreeting(1)
    }, 1000)

    // Hide loading and show main content after 2 seconds
    const loadingTimer = setTimeout(() => {
      setIsLoading(false)
      setShowMainContent(true)
    }, 2000)

    return () => {
      clearTimeout(greetingTimer)
      clearTimeout(loadingTimer)
    }
  }, [])

  // Loading animation variants
  const loadingVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    animate: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 0.8,
      y: -20,
      transition: {
        duration: 0.4,
        ease: "easeIn",
      },
    },
  }
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: showMainContent ? 0.3 : 10, // Delay main content until greeting is done
        staggerChildren: 0.2,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  // const textVariants = {
  //   hidden: { opacity: 0 },
  //   visible: {
  //     opacity: 1,
  //     transition: {
  //       duration: 1,
  //       ease: "easeOut",
  //     },
  //   },
  // }

  const avatarVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="hero section" id="home">
      <div className="container">
        {/* Loading Animation - shows for 2 seconds */}
        <AnimatePresence>
          {isLoading && (
            <motion.div
              className="loading-overlay"
              initial={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentGreeting}
                  className="loading-greeting"
                  variants={loadingVariants}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                >
                  {loadingGreetings[currentGreeting].text}
                </motion.div>
              </AnimatePresence>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main content - only show after loading */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={showMainContent ? "visible" : "hidden"}
        >
          <div className="hero-text">
            <motion.div className="hero-intro" variants={itemVariants}>
              <span className="hero-greeting">Hello, I'm</span>
              <h1 className="hero-name">Aayush Raina</h1>
              {/* <h2 className="hero-title">Full-Stack Application Developer</h2> */}
            </motion.div>

            <motion.p className="hero-description" variants={itemVariants}>
              With 3 years of experience as a{" "}
              <span className="hero-highlight">Software Engineer</span> and an academic background in{" "}
              <span className="hero-highlight">Human-Computer Interaction</span>{" "}
              and <span className="hero-highlight">AI</span>, I engineer
              solutions that are accessible, simplify complex user flows, and
              drive technology adoption by understanding user psychology.
            </motion.p>

            {/* <motion.div className="hero-stats" variants={itemVariants}>
              <div className="stat-item">
                <span className="stat-number">3+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">50+</span>
                <span className="stat-label">Projects Completed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">∞</span>
                <span className="stat-label">Problems Solved</span>
              </div>
            </motion.div> */}
          </div>

          <motion.div className="hero-visual" variants={avatarVariants}>
            <div className="avatar-container">
              {/* Background Circle */}
              <div className="avatar-background-circle"></div>

              {/* Avatar Image */}
              <motion.div
                className="avatar-wrapper"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              >
                <img
                  src={avatarImage}
                  alt="Aayush Raina Avatar"
                  className="avatar-image"
                />
              </motion.div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll indicator */}
        {/* <motion.div
          className="scroll-indicator"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2, duration: 1 }}
        >
          <motion.div
            className="scroll-mouse"
            animate={{ y: [0, 8, 0] }}
            transition={{
              duration: 1.5,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <div className="scroll-wheel"></div>
          </motion.div>
          <span className="scroll-text">Scroll to explore</span>
        </motion.div> */}
      </div>
    </section>
  )
}

export default Hero
