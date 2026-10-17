
import { motion } from "framer-motion";
import {
  BarChart3,
  Code2,
  Globe2,
  Wrench,
  ArrowUpRight,
} from "lucide-react";

const skillGroups = [
  {
    number: "01",
    title: "Data & Analytics",
    description: "Turning raw data into meaningful insights.",
    icon: BarChart3,
    skills: [
      "Power BI",
      "Excel",
      "SQL",
      "Pandas",
      "Plotly",
      "Data Cleaning",
      "Data Visualization",
      "Dashboard Development",
    ],
  },
  {
    number: "02",
    title: "Programming",
    description: "Writing code to solve practical problems.",
    icon: Code2,
    skills: ["Python", "JavaScript", "HTML", "CSS"],
  },
  {
    number: "03",
    title: "Web Development",
    description: "Building applications and connecting data.",
    icon: Globe2,
    skills: ["React", "Node.js", "Express.js", "MongoDB", "REST APIs"],
  },
  {
    number: "04",
    title: "Tools & Platforms",
    description: "Tools I use to develop and manage projects.",
    icon: Wrench,
    skills: ["Git", "GitHub", "VS Code", "Streamlit", "MySQL", "SQLite"],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">
        <motion.div
          className="skills-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>02</span>
          <span>SKILLS & TECHNOLOGIES</span>
        </motion.div>

        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <div>
            <h2>
              Tools I
              <span> work with.</span>
            </h2>
            <p>
              Technologies and tools I use to analyze data,
              build applications, and create useful solutions.
            </p>
          </div>

          <div className="skills-heading-note">
            <span className="skills-heading-dot" />
            CONTINUOUSLY LEARNING
          </div>
        </motion.div>

        <div className="skills-grid">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.article
                className="skill-group"
                key={group.number}
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.15 }}
                transition={{
                  duration: 0.5,
                  delay: index * 0.08,
                }}
              >
                <div className="skill-group-top">
                  <div className="skill-icon">
                    <Icon size={20} strokeWidth={1.7} />
                  </div>

                  <span className="skill-number">{group.number}</span>

                  <span className="skill-count">
                    {String(group.skills.length).padStart(2, "0")} SKILLS
                  </span>
                </div>

                <h3>{group.title}</h3>
                <p className="skill-description">{group.description}</p>

                <div className="skill-list">
                  {group.skills.map((skill) => (
                    <span className="skill-item" key={skill}>
                      <span className="skill-dot" />
                      {skill}
                    </span>
                  ))}
                </div>

                <div className="skill-card-footer">
                  <span>SKILL SET {group.number}</span>
                  <ArrowUpRight size={16} />
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}

export default Skills;
