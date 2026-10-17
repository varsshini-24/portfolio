
import { useState } from "react";
import { motion } from "framer-motion";
import { ArrowUpRight, FolderCode } from "lucide-react";

const projects = [
  {
    number: "01",
    title: "Machine Maintenance Management System",
    category: "FULL STACK / DATA MANAGEMENT",
    image: "/projects/maintenacare.png",
    description:
      "A web-based system for tracking machines, maintenance activities, service schedules and maintenance costs.",
    tools: ["React", "Node.js", "Express.js", "MongoDB"],
    featured: true,
  },
  {
    number: "02",
    title: "Olympic Analytics Dashboard",
    category: "DATA ANALYTICS / VISUALIZATION",
    image: "/projects/olympic-dashboard.png",
    description:
      "An interactive dashboard analyzing Olympic athletes, countries, sports and medal performance across different years.",
    tools: ["Excel", "MySQL", "Power BI"],
    featured: true,
  },
  {
    number: "03",
    title: "Traffic Congestion & Delay Risk Analysis",
    category: "DATA ANALYSIS",
    image: "/projects/traffic-congestion.png",
    description:
      "An analysis project focused on traffic congestion and delay risk in Bangalore using data cleaning, analysis and visualization.",
    tools: ["Excel", "Kaggle"],
    featured: false,
  },
  {
    number: "04",
    title: "Study Time Analyzer",
    category: "PYTHON / DATA ANALYTICS",
    image: "/projects/study-time-analyzer.png",
    description:
      "A mini application that tracks study sessions and provides insights into study duration, subjects and learning patterns.",
    tools: ["Python", "Streamlit", "Pandas", "Plotly", "SQLite"],
    featured: false,
  },
];

function ProjectImage({ project }) {
  const [imageFailed, setImageFailed] = useState(false);

  if (imageFailed) {
    return (
      <div className="project-image-fallback">
        <FolderCode size={42} strokeWidth={1.2} />
        <span>PROJECT PREVIEW</span>
        <small>{project.title}</small>
      </div>
    );
  }

  return (
    <img
      src={project.image}
      alt={`${project.title} preview`}
      className="project-image"
      loading="lazy"
      onError={() => setImageFailed(true)}
    />
  );
}

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
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <div>
            <h2>
              Things I've
              <span> built.</span>
            </h2>
            <p>
              A collection of projects where I combine data, technology,
              and problem-solving to create practical solutions.
            </p>
          </div>

          <div className="projects-heading-note">
            <span className="projects-heading-dot" />
            04 PROJECTS
          </div>
        </motion.div>

        <div className="projects-grid">
          {projects.map((project, index) => (
            <motion.article
              className={`project-card ${project.featured ? "project-card-featured" : ""}`}
              key={project.number}
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
            >
              <div className="project-image-wrapper">
                <ProjectImage project={project} />

                <span className="project-image-number">
                  PROJECT / {project.number}
                </span>

                <span className="project-image-arrow" aria-hidden="true">
                  <ArrowUpRight size={20} />
                </span>
              </div>

              <div className="project-content">
                <div className="project-meta">
                  <span className="project-category">{project.category}</span>
                  <span className="project-number">{project.number}</span>
                </div>

                <h3>{project.title}</h3>

                <p className="project-description">{project.description}</p>

                <div className="project-tools">
                  {project.tools.map((tool) => (
                    <span key={tool}>{tool}</span>
                  ))}
                </div>

                <div className="project-card-footer">
                  <span>BUILT WITH PURPOSE</span>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
