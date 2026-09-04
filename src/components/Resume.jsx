import { motion } from "framer-motion";
import {
  FileText,
  Download,
  ArrowUpRight,
} from "lucide-react";
import "./Resume.css";

function Resume() {
  const resumePath = "/resume/resume.pdf";

  return (
    <section className="resume-section" id="resume">
      <div className="resume-container">

        {/* Section Heading */}
        <div className="resume-heading">
          <span className="section-number">05</span>
          <span className="section-label">RESUME</span>
        </div>

        <div className="resume-content">

          {/* LEFT SIDE */}
          <div className="resume-intro">

            <p className="resume-small-title">
              MY JOURNEY
            </p>

            <h2>
              A snapshot of my
              <br />
              <span>skills & experience.</span>
            </h2>

            <p className="resume-description">
              Explore my resume to learn more about my academic background,
              technical skills, projects, certifications and experience.
            </p>

            <div className="resume-buttons">

              {/* VIEW RESUME */}
              <a
                href={resumePath}
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button primary"
              >
                <FileText size={17} />
                <span>View Resume</span>
                <ArrowUpRight size={16} />
              </a>

              {/* DOWNLOAD RESUME */}
              <a
                href={resumePath}
                download="Varsshini_N_S_Resume.pdf"
                className="resume-button secondary"
              >
                <Download size={17} />
                <span>Download Resume</span>
              </a>

            </div>
          </div>

          {/* RIGHT SIDE RESUME CARD */}
          <motion.div
            className="resume-card"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >

            <div className="resume-card-top">
              <span>VNS.</span>
              <FileText size={20} />
            </div>

            <div className="resume-card-body">
              <p>RESUME</p>

              <h3>Varsshini N.S</h3>

              <span>Data Science Student</span>
            </div>

            {/* OPEN RESUME */}
            <a
              href={resumePath}
              target="_blank"
              rel="noopener noreferrer"
              className="resume-card-link"
            >
              <span>Open Resume</span>
              <ArrowUpRight size={16} />
            </a>

          </motion.div>

        </div>
      </div>
    </section>
  );
}

export default Resume;