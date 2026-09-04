import { motion } from "framer-motion";

const projects = [
  {
    number: "01",
    title: "Machine Maintenance Management System",
    category: "Full Stack / Data Management",
    image: "/projects/maintenance-system.png",
    description:
      "A web-based system for tracking machines, maintenance activities, service schedules and maintenance costs.",
    tools: ["React", "Node.js", "Express.js", "MongoDB"],
  },
  {
    number: "02",
    title: "Olympic Analytics Dashboard",
    category: "Data Analytics / Visualization",
    image: "/projects/olympic-dashboard.png",
    description:
      "An interactive dashboard analyzing Olympic athletes, countries, sports and medal performance across different years.",
    tools: ["Excel", "MySQL", "Power BI"],
  },
  {
    number: "03",
    title: "Traffic Congestion & Delay Risk Analysis",
    category: "Data Analysis",
    image: "/projects/traffic-dashboard.png",
    description:
      "An analysis project focused on traffic congestion and delay risk in Bangalore using data cleaning, analysis and visualization.",
    tools: ["Excel", "Kaggle"],
  },
  {
    number: "04",
    title: "Study Time Analyzer",
    category: "Python / Data Analytics",
    image: "/projects/study-time-analyzer.png",
    description:
      "A mini application that tracks study sessions and provides insights into study duration, subjects and learning patterns.",
    tools: ["Python", "Streamlit", "Pandas", "Plotly", "SQLite"],
  },
];

function Projects() {
  return (
    <section className="projects-section" id="projects">
      <div className="projects-container">

        <motion.div
          className="projects-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>03</span>
          <span>SELECTED PROJECTS</span>
        </motion.div>

        <motion.div
          className="projects-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            Things I've
            <span> built.</span>
          </h2>

          <p>
            Projects where I combine data, technology and
            problem-solving to create practical solutions.
          </p>
        </motion.div>

        <div className="projects-list">

          {projects.map((project, index) => (
            <motion.article
              className="project-card"
              key={project.number}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              <div className="project-number">
                {project.number}
              </div>

              <div className="project-content">

                <p className="project-category">
                  {project.category}
                </p>

                <h3>{project.title}</h3>

                <p className="project-description">
                  {project.description}
                </p>

                {/* PROJECT IMAGE */}
                <div className="project-image-wrapper">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="project-image"
                  />
                </div>

                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span key={tool}>
                      {tool}
                    </span>
                  ))}
                </div>

              </div>

              <div className="project-arrow">
                ↗
              </div>

            </motion.article>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Projects;