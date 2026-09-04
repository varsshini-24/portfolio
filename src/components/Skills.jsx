import { motion } from "framer-motion";

const skillGroups = [
  {
    number: "01",
    title: "Data & Analytics",
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
    skills: [
      "Python",
      "JavaScript",
      "HTML",
      "CSS",
    ],
  },
  {
    number: "03",
    title: "Web Development",
    skills: [
      "React",
      "Node.js",
      "Express.js",
      "MongoDB",
      "REST APIs",
    ],
  },
  {
    number: "04",
    title: "Tools & Platforms",
    skills: [
      "Git",
      "GitHub",
      "VS Code",
      "Streamlit",
      "MySQL",
      "SQLite",
    ],
  },
];

function Skills() {
  return (
    <section className="skills-section" id="skills">
      <div className="skills-container">

        {/* Label */}
        <motion.div
          className="skills-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <span>02</span>
          <span>SKILLS & TECHNOLOGIES</span>
        </motion.div>


        {/* Heading */}
        <motion.div
          className="skills-heading"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <h2>
            Tools I
            <span> work with.</span>
          </h2>

          <p>
            Technologies and tools I use to analyze data,
            build applications and create useful solutions.
          </p>
        </motion.div>


        {/* Skill groups */}
        <div className="skills-grid">

          {skillGroups.map((group, index) => (
            <motion.div
              className="skill-group"
              key={group.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.6,
                delay: index * 0.1,
              }}
            >

              <div className="skill-group-top">

                <span className="skill-number">
                  {group.number}
                </span>

                <span className="skill-count">
                  {String(group.skills.length).padStart(2, "0")}
                </span>

              </div>


              <h3>
                {group.title}
              </h3>


              <div className="skill-list">

                {group.skills.map((skill) => (
                  <div
                    className="skill-item"
                    key={skill}
                  >
                    <span>{skill}</span>
                    <span className="skill-dot"></span>
                  </div>
                ))}

              </div>

            </motion.div>
          ))}

        </div>

      </div>
    </section>
  );
}

export default Skills;