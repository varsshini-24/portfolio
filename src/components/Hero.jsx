
import { motion } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Database,
  BarChart3,
  Code2,
  Sparkles,
} from "lucide-react";

function Hero() {
  return (
    <section className="hero-section" id="home">
      <div className="aurora-background" aria-hidden="true">
        <div className="aurora-glow aurora-purple" />
        <div className="aurora-glow aurora-blue" />
        <div className="aurora-glow aurora-cyan" />
        <div className="aurora-grid" />
      </div>

      <div className="hero-layout">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <div className="hero-eyebrow">
            <span className="status-dot" />
            OPEN TO LEARNING & OPPORTUNITIES
          </div>

          <h1>
            Hi, I'm
            <br />
            <span className="hero-name">Varsshini.</span>
          </h1>

          <div className="hero-role">
            DATA SCIENCE STUDENT
            <span className="hero-separator">/</span>
            ASPIRING DATA ANALYST
          </div>

          <p className="hero-description">
            I turn data into meaningful insights and build practical
            technology solutions to solve real-world problems.
          </p>

          <div className="hero-actions">
            <a href="#projects" className="hero-button hero-button-primary">
              Explore my projects
              <ArrowUpRight size={17} />
            </a>

            <a href="#contact" className="hero-button hero-button-secondary">
              Let's connect
            </a>
          </div>

          <div className="hero-quick-skills">
            <span>PYTHON</span>
            <i />
            <span>SQL</span>
            <i />
            <span>POWER BI</span>
            <i />
            <span>DATA ANALYTICS</span>
          </div>
        </motion.div>

        <motion.div
          className="hero-visual"
          initial={{ opacity: 0, scale: 0.94, x: 20 }}
          animate={{ opacity: 1, scale: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
          aria-label="Decorative data science illustration"
        >
          <div className="visual-orbit orbit-one" />
          <div className="visual-orbit orbit-two" />

          <div className="visual-center">
            <div className="visual-center-icon">
              <BarChart3 size={34} strokeWidth={1.5} />
            </div>
            <span className="visual-center-label">DATA IN MOTION</span>
            <span className="visual-center-caption">
              Discover · Analyze · Build
            </span>
          </div>

          <div className="visual-card visual-card-python">
            <span className="visual-card-icon blue-icon">
              <Code2 size={19} />
            </span>
            <span>
              <strong>Python</strong>
              <small>Data analysis</small>
            </span>
            <span className="visual-card-dot" />
          </div>

          <div className="visual-card visual-card-sql">
            <span className="visual-card-icon violet-icon">
              <Database size={19} />
            </span>
            <span>
              <strong>SQL</strong>
              <small>Data queries</small>
            </span>
            <span className="visual-card-dot" />
          </div>

          <div className="visual-card visual-card-insights">
            <span className="visual-card-icon cyan-icon">
              <Sparkles size={19} />
            </span>
            <span>
              <strong>Insights</strong>
              <small>From raw data</small>
            </span>
          </div>

          <div className="visual-particle particle-one" />
          <div className="visual-particle particle-two" />
          <div className="visual-particle particle-three" />
        </motion.div>
      </div>

      <div className="hero-bottom">
        <span>DATA SCIENCE · ANALYTICS · TECHNOLOGY</span>

        <a href="#about" className="hero-scroll">
          <ArrowDown size={15} />
          SCROLL TO EXPLORE
        </a>

        <span>PORTFOLIO / 2026</span>
      </div>
    </section>
  );
}

export default Hero;
