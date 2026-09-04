import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

function About() {
  return (
    <section className="about-section" id="about">
      <div className="about-container">

        {/* Section number */}
        <motion.div
          className="about-label"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <span>01</span>
          <span>ABOUT ME</span>
        </motion.div>

        {/* Main content */}
        <div className="about-main">

          <motion.div
            className="about-title"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2>
              I build with
              <span> data & technology.</span>
            </h2>
          </motion.div>

          <motion.div
            className="about-description"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.15 }}
          >
            <p>
              I'm Varsshini N. S., a Data Science student with
              a strong interest in Data Analytics, technology,
              and practical problem solving.
            </p>

            <p>
              I enjoy working with data, discovering meaningful
              patterns, creating visual insights, and building
              applications that solve real-world problems.
            </p>

            <a href="#projects" className="about-link">
              Explore my work
              <ArrowUpRight size={16} />
            </a>
          </motion.div>

        </div>

        {/* Focus areas */}
        <motion.div
          className="about-focus"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.25 }}
        >

          <div className="focus-header">
            <span>WHAT I WORK WITH</span>
          </div>

          <div className="focus-grid">

            <div className="focus-card">
              <span className="focus-number">01</span>

              <h3>Data Analytics</h3>

              <p>
                Exploring data, identifying patterns and
                turning information into useful insights.
              </p>

              <div className="focus-tags">
                <span>Python</span>
                <span>SQL</span>
                <span>Power BI</span>
                <span>Excel</span>
              </div>
            </div>


            <div className="focus-card">
              <span className="focus-number">02</span>

              <h3>Web Development</h3>

              <p>
                Building clean and interactive web applications
                using modern frontend and backend technologies.
              </p>

              <div className="focus-tags">
                <span>React</span>
                <span>Node.js</span>
                <span>Express</span>
                <span>MongoDB</span>
              </div>
            </div>


            <div className="focus-card">
              <span className="focus-number">03</span>

              <h3>Data Visualization</h3>

              <p>
                Creating dashboards and visual stories that make
                complex information easier to understand.
              </p>

              <div className="focus-tags">
                <span>Power BI</span>
                <span>Excel</span>
                <span>Charts</span>
                <span>Dashboards</span>
              </div>
            </div>

          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default About;