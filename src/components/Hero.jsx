import { motion, AnimatePresence } from "framer-motion"
import { useState, useEffect } from "react"
import { FiDownload, FiMail, FiGithub, FiLinkedin } from "react-icons/fi"
import avatarImage from "../assets/Self.png"
import "./Hero.css"

const Hero = () => {
  // Multi-language greetings
  const greetings = [
    { text: "नमस्ते", language: "Hindi" },
    { text: "Hola", language: "Spanish" },
    { text: "Hello", language: "English" },
    { text: "Bonjour", language: "French" },
    { text: "こんにちは", language: "Japanese" },
  ]

  const [currentGreeting, setCurrentGreeting] = useState(0)
  const [showMainContent, setShowMainContent] = useState(false)

  useEffect(() => {
    // Start cycling through greetings immediately
    const greetingInterval = setInterval(() => {
      setCurrentGreeting((prev) => (prev + 1) % greetings.length)
    }, 2000) // Change greeting every 2 seconds

    // Show main content after initial greeting animation (3 seconds)
    const contentTimer = setTimeout(() => {
      setShowMainContent(true)
    }, 3000)

    return () => {
      clearInterval(greetingInterval)
      clearTimeout(contentTimer)
    }
  }, [greetings.length])

  // Greeting animation variants
  const greetingVariants = {
    initial: {
      opacity: 0,
      scale: 0.8,
      y: 20,
    },
    animate: {
      opacity: 0.2,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
    exit: {
      opacity: 0,
      scale: 1.1,
      transition: {
        duration: 0.5,
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

  const textVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        duration: 1,
        ease: "easeOut",
      },
    },
  }

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
        {/* Animated multi-language greeting backdrop */}
        <div className="hero-greeting-large">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentGreeting}
              className="namaste-text"
              variants={greetingVariants}
              initial="initial"
              animate="animate"
              exit="exit"
            >
              {greetings[currentGreeting].text}
            </motion.span>
          </AnimatePresence>
        </div>

        {/* Main content - only show after initial greeting animation */}
        <motion.div
          className="hero-content"
          variants={containerVariants}
          initial="hidden"
          animate={showMainContent ? "visible" : "hidden"}
        >
          <div className="hero-text">
            <motion.div className="hero-name-container" variants={textVariants}>
              <span className="hero-prefix">I'm </span>
              <span className="hero-name heading-primary">Aayush Raina</span>
            </motion.div>

            <motion.p
              className="hero-description text-body"
              variants={itemVariants}
            >
              A{" "}
              <span className="hero-highlight">
                Full-Stack Application Developer
              </span>{" "}
              with 3+ years of experience in a corporate{" "}
              <span className="hero-highlight">Agile</span> setting, and a deep
              academic background in{" "}
              <span className="hero-highlight">Human-Computer Interaction</span>{" "}
              and <span className="hero-highlight">AI</span>, my goal is to
              engineer solutions that are accessible, simplify complex user
              flows, and drive technology adoption by understanding user
              psychology.
            </motion.p>

            {/* <motion.div className="hero-actions" variants={itemVariants}>
              <a href="#contact" className="btn btn-primary">
                <FiMail />
                Get In Touch
              </a>
              <a href="src/assets/Aayush_Raina_CV.pdf" className="btn btn-secondary" download>
                <FiDownload />
                Download CV
              </a>
            </motion.div> */}

            {/* <motion.div className="hero-social" variants={itemVariants}>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FiGithub />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
              >
                <FiLinkedin />
              </a>
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
        <motion.div
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
        </motion.div>
      </div>
    </section>
  )
}

export default Hero
