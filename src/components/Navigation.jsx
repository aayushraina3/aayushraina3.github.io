import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate, useLocation } from "react-router-dom"
import {
  FiMenu,
  FiX,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiArrowLeft,
} from "react-icons/fi"
import "./Navigation.css"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [hasAnimated, setHasAnimated] = useState(false)
  const navigate = useNavigate()
  const location = useLocation()
  const isHomePage = location.pathname === "/"

  useEffect(() => {
    // Check if navigation has already been loaded
    const navLoaded = sessionStorage.getItem("navLoaded")
    if (navLoaded) {
      setHasAnimated(true)
    } else {
      sessionStorage.setItem("navLoaded", "true")
    }
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  const navItems = [
    {
      name: "Projects",
      action: "navigate",
      target: "/projects",
    },
    {
      name: "Resume",
      action: "navigate",
      target: "/resume",
    },
    {
      name: "Contact",
      action: "navigate",
      target: "/contact",
    },
  ]

  const handleNavClick = (item) => {
    setIsMobileMenuOpen(false)

    if (item.action === "navigate") {
      navigate(item.target)
    } else if (item.action === "download") {
      // Create a temporary link element to trigger download
      const link = document.createElement("a")
      link.href = item.target
      link.download = "Aayush_Raina_Resume.pdf"
      link.target = "_blank"
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
    }
  }

  return (
    <motion.nav
      className={`navigation ${isScrolled ? "scrolled" : ""}`}
      initial={hasAnimated ? false : { y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: hasAnimated ? 0 : 0.6, ease: "easeOut" }}
    >
      <div className="nav-container">
        {/* Back Button - Left Side (only on non-home pages) */}
        {!isHomePage && (
          <div className="back-button-container">
            <motion.button
              className="back-button"
              onClick={() => navigate("/")}
              whileHover={{ scale: 1.05, x: -3 }}
              whileTap={{ scale: 0.95 }}
              initial={hasAnimated ? false : { opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{
                delay: hasAnimated ? 0 : 0.2,
                duration: hasAnimated ? 0 : 0.5,
              }}
            >
              <FiArrowLeft />
              <span>Home</span>
            </motion.button>
          </div>
        )}

        {/* Social Icons - Top Right */}
        <div className="social-icons">
          <motion.a
            href="https://github.com/aayushraina3"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.1, y: -2 }}
            initial={hasAnimated ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: hasAnimated ? 0 : 0.7,
              duration: hasAnimated ? 0 : 0.5,
            }}
          >
            <FiGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/aayushraina03/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.1, y: -2 }}
            initial={hasAnimated ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: hasAnimated ? 0 : 0.8,
              duration: hasAnimated ? 0 : 0.5,
            }}
          >
            <FiLinkedin />
          </motion.a>
          <motion.a
            href="mailto:aayushraina3@gmail.com"
            className="social-link"
            whileHover={{ scale: 1.1, y: -2 }}
            initial={hasAnimated ? false : { opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: hasAnimated ? 0 : 0.9,
              duration: hasAnimated ? 0 : 0.5,
            }}
          >
            <FiMail />
          </motion.a>
        </div>

        {/* Centered Navigation Menu */}
        <div className="nav-menu centered-menu">
          {navItems.map((item, index) => {
            const isActive = location.pathname === item.target
            return (
              <motion.button
                key={item.name}
                className={`nav-link ${isActive ? "active" : ""}`}
                onClick={() => handleNavClick(item)}
                initial={hasAnimated ? false : { opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  delay: hasAnimated ? 0 : index * 0.1 + 0.3,
                  duration: hasAnimated ? 0 : 0.5,
                }}
                whileHover={{ y: -2 }}
              >
                {item.name}
              </motion.button>
            )
          })}
        </div>

        {/* Mobile Menu Toggle */}
        <motion.button
          className="mobile-menu-toggle"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          {isMobileMenuOpen ? <FiX /> : <FiMenu />}
        </motion.button>

        {/* Mobile Navigation */}
        <motion.div
          className={`mobile-menu ${isMobileMenuOpen ? "open" : ""}`}
          initial={{ opacity: 0, x: "100%" }}
          animate={{
            opacity: isMobileMenuOpen ? 1 : 0,
            x: isMobileMenuOpen ? "0%" : "100%",
          }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          <div className="mobile-menu-header">
            <h3>Menu</h3>
            <motion.button
              className="mobile-menu-close"
              onClick={() => setIsMobileMenuOpen(false)}
              whileHover={{ scale: 1.1, rotate: 90 }}
              whileTap={{ scale: 0.9 }}
            >
              <FiX />
            </motion.button>
          </div>

          <div className="mobile-menu-content">
            {!isHomePage && (
              <motion.button
                className="mobile-nav-link mobile-back-link"
                onClick={() => {
                  navigate("/")
                  setIsMobileMenuOpen(false)
                }}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 50,
                }}
                transition={{ delay: 0, duration: 0.3 }}
                whileHover={{ x: 10 }}
              >
                <FiArrowLeft />
                Home
              </motion.button>
            )}

            {navItems.map((item, index) => {
              const isActive = location.pathname === item.target
              return (
                <motion.button
                  key={item.name}
                  className={`mobile-nav-link ${isActive ? "active" : ""}`}
                  onClick={() => handleNavClick(item)}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : 50,
                  }}
                  transition={{ delay: (index + 1) * 0.1, duration: 0.3 }}
                  whileHover={{ x: 10 }}
                >
                  {item.name}
                </motion.button>
              )
            })}

            {/* Mobile Social Icons */}
            <div className="mobile-social-icons">
              <p className="mobile-social-label">Connect</p>
              <div className="mobile-social-links">
                <motion.a
                  href="https://github.com/aayushraina3/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-link"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    scale: isMobileMenuOpen ? 1 : 0,
                  }}
                  transition={{ delay: 0.5, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiGithub />
                </motion.a>
                <motion.a
                  href="https://linkedin.com/in/aayushraina03/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mobile-social-link"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    scale: isMobileMenuOpen ? 1 : 0,
                  }}
                  transition={{ delay: 0.6, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiLinkedin />
                </motion.a>
                <motion.a
                  href="mailto:aayushraina3@gmail.com"
                  className="mobile-social-link"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    scale: isMobileMenuOpen ? 1 : 0,
                  }}
                  transition={{ delay: 0.7, duration: 0.3 }}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiMail />
                </motion.a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          className="mobile-menu-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
        />
      )}
    </motion.nav>
  )
}

export default Navigation
