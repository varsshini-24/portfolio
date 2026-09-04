import { motion } from "framer-motion";
import { GraduationCap, MapPin, ArrowUpRight } from "lucide-react";
import "./Education.css";

function Education() {
  return (
    <section className="education-section" id="education">
      <div className="education-container">

        {/* Section Header */}
        <div className="education-header">
          <span className="section-number">04</span>

          <div>
            <p className="section-label">EDUCATION</p>
            <h2>Academic journey.</h2>
          </div>
        </div>

        {/* Education Card */}
        <motion.div
          className="education-card"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <div className="education-icon">
            <GraduationCap size={28} />
          </div>

          <div className="education-content">
            <div className="education-top">
              <span className="education-status">
                CURRENTLY PURSUING
              </span>

              <span className="education-arrow">
                <ArrowUpRight size={20} />
              </span>
            </div>

            <h3>B.Sc. Data Science</h3>

            <h4>
              KPR College Of Arts, Science And Research
            </h4>

            <div className="education-location">
              <MapPin size={16} />
              <span>Coimbatore, India</span>
            </div>

            <p className="education-description">
              Building a strong foundation in data science, programming,
              analytics, data visualization and practical technology
              solutions.
            </p>

            <div className="education-tags">
              <span>Data Science</span>
              <span>Data Analytics</span>
              <span>Programming</span>
              <span>Data Visualization</span>
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}

export default Education;