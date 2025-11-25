import { useState } from "react"
import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import {
  FiMail,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiSend,
  FiUser,
  FiMessageSquare,
} from "react-icons/fi"
import "./ContactPage.css"

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus(null)

    try {
      // Using Web3Forms (free service for static sites)
      const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          access_key: import.meta.env.VITE_FORM_ACCESS_KEY, // Replace with your actual key from https://web3forms.com
          name: formData.name,
          email: formData.email,
          subject: formData.subject,
          message: formData.message,
        }),
      })

      const result = await response.json()

      if (result.success) {
        setSubmitStatus("success")
        setFormData({ name: "", email: "", subject: "", message: "" })
      } else {
        setSubmitStatus("error")
      }
    } catch (error) {
      setSubmitStatus("error")
      console.error("Error submitting form:", error)
    } finally {
      setIsSubmitting(false)
    }
  }

  const contactInfo = [
    {
      icon: FiMail,
      label: "Email",
      value: "aayushraina3@gmail.com",
      href: "mailto:aayushraina3@gmail.com",
    },
    {
      icon: FiMapPin,
      label: "Location",
      value: "Birmingham, UK",
      href: null,
    },
  ]

  const socialLinks = [
    {
      icon: FiGithub,
      label: "GitHub",
      href: "https://github.com/aayushraina3",
    },
    {
      icon: FiLinkedin,
      label: "LinkedIn",
      href: "https://linkedin.com/in/aayushraina03",
    },
  ]

  return (
    <div className="contact-page">
      <Navigation />
      <motion.div
        className="contact-page-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: -20 }}
        transition={{ duration: 0.6 }}
      >
        <div className="contact-container">
          {/* Header */}
          <motion.div
            className="contact-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
          >
            <h2 className="contact-title">Let's Connect!</h2>
            <p className="contact-subtitle">
              Have a project in mind or just want to chat? I'd love to hear from
              you.
            </p>
          </motion.div>

          <div className="contact-grid">
            {/* Contact Form */}
            <motion.div
              className="contact-form-section"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name">
                    <FiUser /> Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    placeholder="Your Name"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">
                    <FiMail /> Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    placeholder="your.email@example.com"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="subject">
                    <FiMessageSquare /> Subject
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What's this about?"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message">
                    <FiMessageSquare /> Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell me about your project or idea..."
                    rows="6"
                    required
                  />
                </div>

                <motion.button
                  type="submit"
                  className="submit-button"
                  disabled={isSubmitting}
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <FiSend /> Send Message
                    </>
                  )}
                </motion.button>

                {submitStatus === "success" && (
                  <motion.div
                    className="form-status success"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Message sent successfully! I'll get back to you soon.
                  </motion.div>
                )}

                {submitStatus === "error" && (
                  <motion.div
                    className="form-status error"
                    initial={{ opacity: 0, y: -10 }}
                    animate={{ opacity: 1, y: 0 }}
                  >
                    Oops! Something went wrong. Please try again or email me
                    directly.
                  </motion.div>
                )}
              </form>
            </motion.div>

            {/* Contact Info Sidebar */}
            <motion.div
              className="contact-info-section"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              <div className="info-card">
                <h3>Contact Information</h3>
                <div className="info-list">
                  {contactInfo.map((info, index) => {
                    const IconComponent = info.icon
                    return (
                      <motion.div
                        key={info.label}
                        className="info-item"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: 0.5 + index * 0.1, duration: 0.5 }}
                      >
                        <div className="info-icon">
                          <IconComponent />
                        </div>
                        <div className="info-text">
                          <p className="info-label">{info.label}</p>
                          {info.href ? (
                            <a href={info.href} className="info-value">
                              {info.value}
                            </a>
                          ) : (
                            <p className="info-value">{info.value}</p>
                          )}
                        </div>
                      </motion.div>
                    )
                  })}
                </div>
              </div>

              <div className="social-card">
                <h3>Connect With Me</h3>
                <div className="contact-social-links">
                  {socialLinks.map((social, index) => {
                    const IconComponent = social.icon
                    return (
                      <motion.a
                        key={social.label}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="contact-social-link"
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.7 + index * 0.1, duration: 0.4 }}
                        whileHover={{ scale: 1.1, y: -3 }}
                        whileTap={{ scale: 0.95 }}
                      >
                        <IconComponent />
                        <span>{social.label}</span>
                      </motion.a>
                    )
                  })}
                </div>
              </div>

              <motion.div
                className="availability-badge"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.9, duration: 0.5 }}
              >
                <div className="status-dot"></div>
                <span>Available for freelance projects</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </motion.div>
      <Footer />
    </div>
  )
}

export default ContactPage
