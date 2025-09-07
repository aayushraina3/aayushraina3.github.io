import { motion } from "framer-motion"
import { useInView } from "react-intersection-observer"
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaFigma,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaUsers,
  FaLightbulb,
  FaSearchPlus,
  FaUserCheck,
  FaUniversalAccess,
} from "react-icons/fa"
import {
  SiTypescript,
  SiPostgresql,
  SiNextdotjs,
  SiNestjs,
  SiSpring,
  SiFirebase,
  SiGithub,
  SiGooglecloud,
  SiPostman,
  SiNotion,
} from "react-icons/si"
import {
  MdOutlineDesignServices,
  MdOutlineQuiz,
  MdOutlinePersonPin,
  MdApi,
  MdOutlinePresentToAll,
  MdOutlineTimeline,
} from "react-icons/md"
import "./Skills.css"

const Skills = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const skills = [
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" }, // JavaScript yellow
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" }, // TypeScript blue
    { name: "HTML", icon: FaHtml5, color: "#E34F26" }, // HTML orange
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" }, // CSS blue
    { name: "Angular", icon: FaAngular, color: "#DD0031" }, // Angular red
    { name: "React", icon: FaReact, color: "#61DAFB" }, // React cyan
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" }, // Next.js black
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" }, // NestJS red
    { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" }, // Spring green
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" }, // Firebase amber
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" }, // PostgreSQL blue
    { name: "Git", icon: FaGitAlt, color: "#F05032" }, // Git red-orange
    { name: "GitHub", icon: SiGithub, color: "#181717" }, // GitHub black
    { name: "GCP", icon: SiGooglecloud, color: "#4285F4" }, // Google Cloud blue
    { name: "Postman", icon: SiPostman, color: "#FF6C37" }, // Postman orange
    { name: "Notion", icon: SiNotion, color: "#000000" }, // Notion black
    {
      name: "Wireframing",
      icon: MdOutlineDesignServices,
      color: "var(--accent-primary)",
    },
    {
      name: "Prototyping",
      icon: MdOutlineQuiz,
      color: "var(--accent-primary)",
    },
    {
      name: "User Research",
      icon: FaSearchPlus,
      color: "var(--accent-primary)",
    },
    { name: "Usability Testing", icon: MdApi, color: "var(--accent-primary)" },
    {
      name: "Persona Development",
      icon: MdOutlinePersonPin,
      color: "var(--accent-primary)",
    },
    { name: "Figma (basic)", icon: FaFigma, color: "#F24E1E" }, // Figma red-orange
    {
      name: "Accessibility (WCAG)",
      icon: FaUniversalAccess,
      color: "var(--accent-primary)",
    },
    { name: "Agile", icon: MdOutlineTimeline, color: "var(--accent-primary)" },
    {
      name: "Sprint Planning",
      icon: MdOutlineTimeline,
      color: "var(--accent-primary)",
    },
    {
      name: "Client Demos",
      icon: MdOutlinePresentToAll,
      color: "var(--accent-primary)",
    },
    { name: "API Testing", icon: MdApi, color: "var(--accent-primary)" },
    {
      name: "Design Thinking",
      icon: FaLightbulb,
      color: "var(--accent-primary)",
    },
    {
      name: "Cross-functional Collaboration",
      icon: FaUsers,
      color: "var(--accent-primary)",
    },
  ]

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

  const skillVariants = {
    hidden: { scale: 0, opacity: 0 },
    visible: {
      scale: 1,
      opacity: 1,
      transition: {
        duration: 0.4,
        ease: "easeOut",
      },
    },
  }

  return (
    <section className="skills section" id="skills" ref={ref}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="section-header"
        >
          <h2 className="heading-secondary text-center">
            Skills & <span className="text-accent">Expertise</span>
          </h2>
          <p className="text-body text-center section-subtitle">
            Technologies and tools I use to bring ideas to life
          </p>
        </motion.div>

        <motion.div
          className="skills-container"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="skills-grid">
            {skills.map((skill, skillIndex) => (
              <motion.div
                key={skill.name}
                className="skill-card circular"
                variants={skillVariants}
                whileHover={{
                  scale: 1.1,
                  rotate: [0, -5, 5, 0],
                  transition: { duration: 0.3 },
                }}
                whileTap={{ scale: 0.95 }}
                style={{ "--skill-color": skill.color }}
                title={skill.name}
              >
                <div className="skill-icon-wrapper">
                  <skill.icon className="skill-icon" />
                  <motion.div
                    className="skill-glow"
                    animate={{
                      scale: [1, 1.2, 1],
                      opacity: [0.2, 0.5, 0.2],
                    }}
                    transition={{
                      duration: 2 + (skillIndex % 3) * 0.5,
                      repeat: Infinity,
                      delay: skillIndex * 0.1,
                    }}
                  />
                </div>

                {/* Tooltip */}
                <div className="skill-tooltip">{skill.name}</div>

                {/* Floating particles effect */}
                <div className="skill-particles">
                  {[...Array(2)].map((_, i) => (
                    <motion.div
                      key={i}
                      className="particle"
                      animate={{
                        y: [0, -15, 0],
                        x: [0, Math.random() * 8 - 4, 0],
                        opacity: [0, 0.8, 0],
                      }}
                      transition={{
                        duration: 2 + Math.random(),
                        repeat: Infinity,
                        delay: Math.random() * 2,
                      }}
                    />
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Background decorative elements */}
        <div className="skills-background">
          <motion.div
            className="bg-circle circle-1"
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
            className="bg-circle circle-2"
            animate={{
              rotate: [360, 0],
              scale: [1, 0.9, 1],
            }}
            transition={{
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            }}
          />
          <motion.div
            className="bg-circle circle-3"
            animate={{
              rotate: [0, 360],
              scale: [1, 1.2, 1],
            }}
            transition={{
              duration: 30,
              repeat: Infinity,
              ease: "linear",
            }}
          />
        </div>
      </div>
    </section>
  )
}

export default Skills
