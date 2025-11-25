import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import { FiMenu, FiX, FiGithub, FiLinkedin, FiMail } from "react-icons/fi"
import "./Navigation.css"

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const navigate = useNavigate()

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
      action: "download",
      target: "/Aayush_Raina_Resume.pdf",
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
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
    >
      <div className="nav-container">
        {/* Social Icons - Top Right */}
        <div className="social-icons">
          <motion.a
            href="https://github.com/aayushraina3"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.1, y: -2 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.5 }}
          >
            <FiGithub />
          </motion.a>
          <motion.a
            href="https://linkedin.com/in/aayushraina03/"
            target="_blank"
            rel="noopener noreferrer"
            className="social-link"
            whileHover={{ scale: 1.1, y: -2 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <FiLinkedin />
          </motion.a>
          <motion.a
            href="mailto:aayushraina3@gmail.com"
            className="social-link"
            whileHover={{ scale: 1.1, y: -2 }}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.5 }}
          >
            <FiMail />
          </motion.a>
        </div>

        {/* Centered Navigation Menu */}
        <div className="nav-menu centered-menu">
          {navItems.map((item, index) => (
            <motion.button
              key={item.name}
              className="nav-link"
              onClick={() => handleNavClick(item)}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
              whileHover={{ y: -2 }}
            >
              {item.name}
            </motion.button>
          ))}
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
          <div className="mobile-menu-content">
            {navItems.map((item, index) => (
              <motion.button
                key={item.name}
                className="mobile-nav-link"
                onClick={() => handleNavClick(item)}
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 50,
                }}
                transition={{ delay: index * 0.1, duration: 0.3 }}
                whileHover={{ x: 10 }}
              >
                {item.name}
              </motion.button>
            ))}

            {/* Mobile Social Icons */}
            <div className="mobile-social-icons">
              <motion.a
                href="https://github.com/aayushraina3/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 50,
                }}
                transition={{ delay: 0.4, duration: 0.3 }}
              >
                <FiGithub />
              </motion.a>
              <motion.a
                href="https://linkedin.com/in/aayushraina03/"
                target="_blank"
                rel="noopener noreferrer"
                className="mobile-social-link"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 50,
                }}
                transition={{ delay: 0.5, duration: 0.3 }}
              >
                <FiLinkedin />
              </motion.a>
              <motion.a
                href="mailto:aayushraina3@gmail.com"
                className="mobile-social-link"
                initial={{ opacity: 0, x: 50 }}
                animate={{
                  opacity: isMobileMenuOpen ? 1 : 0,
                  x: isMobileMenuOpen ? 0 : 50,
                }}
                transition={{ delay: 0.6, duration: 0.3 }}
              >
                <FiMail />
              </motion.a>
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
