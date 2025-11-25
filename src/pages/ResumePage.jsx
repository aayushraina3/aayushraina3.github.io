import { motion } from "framer-motion"
import Navigation from "../components/Navigation"
import Footer from "../components/Footer"
import {
  FaReact,
  FaJs,
  FaGitAlt,
  FaHtml5,
  FaCss3Alt,
  FaAngular,
  FaBriefcase,
  FaGraduationCap,
  FaCalendar,
  FaMapMarkerAlt,
  FaFigma,
  FaTools,
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
import "./ResumePage.css"

const ResumePage = () => {
  const skills = [
    { name: "JavaScript", icon: FaJs, color: "#F7DF1E" },
    { name: "TypeScript", icon: SiTypescript, color: "#3178C6" },
    { name: "HTML", icon: FaHtml5, color: "#E34F26" },
    { name: "CSS", icon: FaCss3Alt, color: "#1572B6" },
    { name: "Angular", icon: FaAngular, color: "#DD0031" },
    { name: "React", icon: FaReact, color: "#61DAFB" },
    { name: "Next.js", icon: SiNextdotjs, color: "#000000" },
    { name: "NestJS", icon: SiNestjs, color: "#E0234E" },
    { name: "Spring Boot", icon: SiSpring, color: "#6DB33F" },
    { name: "Firebase", icon: SiFirebase, color: "#FFCA28" },
    { name: "PostgreSQL", icon: SiPostgresql, color: "#336791" },
    { name: "Git", icon: FaGitAlt, color: "#F05032" },
    { name: "GitHub", icon: SiGithub, color: "#181717" },
    { name: "GCP", icon: SiGooglecloud, color: "#4285F4" },
    { name: "Postman", icon: SiPostman, color: "#FF6C37" },
    { name: "Notion", icon: SiNotion, color: "#000000" },
    { name: "Figma", icon: FaFigma, color: "#8248dfff" },
  ]

  const experiences = [
    {
      title: "Digital Specialist Engineer",
      company: "Infosys Ltd.",
      location: "India",
      period: "September 2021 - August 2024",
      responsibilities: [
        "Engineered full-stack features using React, Node.js, and TypeScript, implementing scalable REST APIs and data-driven UI improvements based on client requirements",
        "Led application performance optimization by 95% (10s to 500ms) via database query indexing, server-side caching, and React state optimization, significantly boosting user experience",
        "Built production-ready architectures through collaboration with cloud and QA engineers, ensuring API reliability, secure data handling, and adherence to WCAG accessibility standards",
        "Wrote clean, testable code with comprehensive unit and integration tests using Jest and React Testing Library, ensuring feature reliability",
        "Increased sprint velocity by 12.5% through strategic workflow optimizations and data-driven analysis of development bottlenecks",
        "Designed and deployed scalable PostgreSQL schemas and Node.js endpoints, ensuring seamless integration with frontend clients using Git-based workflows and CI/CD tools",
      ],
    },
  ]

  const education = [
    {
      degree: "MSc in Human-Computer Interaction",
      school: "University of Birmingham",
      location: "Birmingham, UK",
      period: "September 2024 - September 2025",
      gpa: "",
      relevantCourses: [],
    },
    {
      degree: "Bachelor of Technology in Computer Science",
      school: "GGSIPU",
      location: "Delhi, India",
      period: "August 2017 - August 2021",
      gpa: "",
      relevantCourses: [],
    },
  ]

  return (
    <div className="resume-page">
      <Navigation />

      <motion.main
        className="resume-content"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <div className="container">
          {/* Header */}
          <motion.div
            className="resume-header"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2 className="resume-title">Resume</h2>
            <p className="resume-subtitle">
              Full Stack Developer | UI/UX Enthusiast
            </p>
          </motion.div>

          {/* Experience Section */}
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <h2 className="section-title">
              <FaBriefcase className="section-icon" />
              Work Experience
            </h2>
            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, x: -30 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h3 className="job-title">{exp.title}</h3>
                    <div className="job-meta">
                      <span className="company">{exp.company}</span>
                      <span className="location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                      <span className="period">
                        <FaCalendar /> {exp.period}
                      </span>
                    </div>
                    <ul className="responsibilities">
                      {exp.responsibilities.map((resp, idx) => (
                        <li key={idx}>{resp}</li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Education Section */}
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <h2 className="section-title">
              <FaGraduationCap className="section-icon" />
              Education
            </h2>
            <div className="education-grid">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="education-card"
                  initial={{ opacity: 0, y: 30 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                >
                  <h3 className="degree">{edu.degree}</h3>
                  <div className="school-info">
                    <p className="school-name">{edu.school}</p>
                    <p className="school-location">
                      <FaMapMarkerAlt /> {edu.location}
                    </p>
                    <p className="school-period">
                      <FaCalendar /> {edu.period}
                    </p>
                    {edu.gpa && <p className="gpa">GPA: {edu.gpa}</p>}
                  </div>
                  {edu.relevantCourses && edu.relevantCourses.length > 0 && (
                    <div className="courses">
                      <h4>Relevant Courses:</h4>
                      <ul>
                        {edu.relevantCourses.map((course, idx) => (
                          <li key={idx}>{course}</li>
                        ))}
                      </ul>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Skills Section */}
          <motion.section
            className="resume-section"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h2 className="section-title">
              <FaTools className="section-icon" />
              Skills & Technologies
            </h2>
            <div className="skills-grid">
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className="skill-item"
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4, delay: 0.4 + index * 0.05 }}
                  whileHover={{ scale: 1.1 }}
                  style={{ "--skill-color": skill.color }}
                >
                  <skill.icon className="skill-icon" />
                  <span className="skill-name">{skill.name}</span>
                </motion.div>
              ))}
            </div>
          </motion.section>
        </div>
      </motion.main>

      <Footer />
    </div>
  )
}

export default ResumePage
