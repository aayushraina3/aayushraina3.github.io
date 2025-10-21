import { motion } from "framer-motion"
import { useNavigate } from "react-router-dom"
import {
  FiArrowLeft,
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
} from "react-icons/fi"
import "./ContactPage.css"

const ContactPage = () => {
  const navigate = useNavigate()

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "aayushraina23@gmail.com",
      href: "mailto:aayushraina23@gmail.com",
    },
    {
      icon: FiGithub,
      label: "GitHub",
      value: "aayushraina23",
      href: "https://github.com/aayushraina23",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      value: "aayushraina23",
      href: "https://linkedin.com/in/aayushraina23",
    },
  ]

  return (
    <motion.div
      className="contact-page"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.6 }}
    >
      <div className="contact-page-header">
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
          className="contact-page-title"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Get In Touch
        </motion.h1>
        <motion.p
          className="contact-page-subtitle"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          I'm always open to discussing new opportunities and interesting
          projects
        </motion.p>
      </div>

      <div className="contact-content">
        <div className="contact-cards">
          {contactInfo.map((contact, index) => {
            const IconComponent = contact.icon
            return (
              <motion.a
                key={contact.label}
                href={contact.href}
                target={contact.href.startsWith("http") ? "_blank" : "_self"}
                rel={
                  contact.href.startsWith("http") ? "noopener noreferrer" : ""
                }
                className="contact-card"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 + index * 0.1, duration: 0.6 }}
                whileHover={{ y: -8, scale: 1.02 }}
              >
                <div className="contact-icon">
                  <IconComponent />
                </div>
                <h3>{contact.label}</h3>
                <p>{contact.value}</p>
              </motion.a>
            )
          })}
        </div>

        <motion.div
          className="contact-message"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h2>Let's Work Together</h2>
          <p>
            Whether you have a project in mind, want to collaborate, or just
            want to say hello, I'd love to hear from you. Feel free to reach out
            through any of the channels above.
          </p>
        </motion.div>
      </div>
    </motion.div>
  )
}

export default ContactPage
