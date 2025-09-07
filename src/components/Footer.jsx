import { motion } from "framer-motion"
import {
  FiMail,
  FiPhone,
  FiMapPin,
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiHeart,
  FiArrowUp,
} from "react-icons/fi"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.1,
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
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
    <footer className="footer" id="contact">
      <div className="container">
        <motion.div
          className="footer-content"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* Contact Section */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3 className="footer-title heading-tertiary">
              Let's <span className="text-accent">Connect</span>
            </h3>
            <p className="footer-description text-body">
              Ready to bring your ideas to life? Let's connect if you’re
              building digital products that put people first.
            </p>

            <div className="contact-info">
              <motion.div
                className="contact-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FiMail className="contact-icon" />
                <a href="mailto:aayushraina3@gmail.com" className="contact-link">
                  aayushraina3@gmail.com
                </a>
              </motion.div>

              {/* <motion.div
                className="contact-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FiPhone className="contact-icon" />
                <a href="tel:+1234567890" className="contact-link">
                  +1 (234) 567-890
                </a>
              </motion.div> */}

              <motion.div
                className="contact-item"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                <FiMapPin className="contact-icon" />
                <span className="contact-text">Birmingham, UK</span>
              </motion.div>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3 className="footer-title heading-tertiary">Quick Links</h3>
            <nav className="footer-nav">
              <motion.a
                href="#home"
                className="footer-link"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Home
              </motion.a>
              <motion.a
                href="#skills"
                className="footer-link"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Skills
              </motion.a>
              <motion.a
                href="#projects"
                className="footer-link"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Projects
              </motion.a>
              <motion.a
                href="#contact"
                className="footer-link"
                whileHover={{ x: 5 }}
                transition={{ duration: 0.2 }}
              >
                Contact
              </motion.a>
            </nav>
          </motion.div>

          {/* Social Links */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3 className="footer-title heading-tertiary">Follow Me</h3>
            <p className="footer-description text-body">
              Stay updated with my latest projects and insights.
            </p>

            <div className="social-links">
              <motion.a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiGithub />
                <span>GitHub</span>
              </motion.a>

              <motion.a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiLinkedin />
                <span>LinkedIn</span>
              </motion.a>

              <motion.a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, rotate: 5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiTwitter />
                <span>Twitter</span>
              </motion.a>

              <motion.a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                whileHover={{ scale: 1.1, rotate: -5 }}
                whileTap={{ scale: 0.95 }}
              >
                <FiInstagram />
                <span>Instagram</span>
              </motion.a>
            </div>
          </motion.div>

          {/* Newsletter Signup */}
          <motion.div className="footer-section" variants={itemVariants}>
            <h3 className="footer-title heading-tertiary">Stay Updated</h3>
            <p className="footer-description text-body">
              Subscribe to get notified about new projects and blog posts.
            </p>

            <form className="newsletter-form">
              <div className="form-group">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="newsletter-input"
                  required
                />
                <motion.button
                  type="submit"
                  className="newsletter-btn"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Subscribe
                </motion.button>
              </div>
            </form>
          </motion.div>
        </motion.div>

        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.6 }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} John Doe. Made with{" "}
              <FiHeart className="heart-icon" /> and passion.
            </p>

            <motion.button
              className="scroll-to-top"
              onClick={scrollToTop}
              whileHover={{ scale: 1.1, y: -2 }}
              whileTap={{ scale: 0.95 }}
              animate={{ y: [0, -5, 0] }}
              transition={{
                y: {
                  duration: 2,
                  repeat: Infinity,
                  ease: "easeInOut",
                },
              }}
            >
              <FiArrowUp />
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Background decorative elements */}
      <div className="footer-background">
        <motion.div
          className="bg-wave"
          animate={{
            x: [0, 50, 0],
            y: [0, -20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="bg-circle-1"
          animate={{
            scale: [1, 1.2, 1],
            rotate: [0, 180, 360],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "linear",
          }}
        />
        <motion.div
          className="bg-circle-2"
          animate={{
            scale: [1, 0.8, 1],
            rotate: [360, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>
    </footer>
  )
}

export default Footer
