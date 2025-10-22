import { motion } from "framer-motion"
import { FiHeart, FiArrowUp } from "react-icons/fi"
import "./Footer.css"

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    })
  }

  return (
    <footer className="footer">
      <div className="container">
        {/* Footer Bottom */}
        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          <div className="footer-bottom-content">
            <p className="copyright">
              © {currentYear} Aayush Raina. Made with{" "}
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
    </footer>
  )
}

export default Footer
